const searchForm = document.getElementById("searchForm");
const listDisplay = document.getElementById("flightList");
// const destinationDisplay = document.getElementById("destinationDisplay");
let source = "";
let destination = "";
let flights = [];
let filteredFlights = [];
const getFlights = async () => {
    const response = await fetch("./flights.json");
    if(response.status !== 200) {
        throw new Error("Error getting data!")
    }
    const data = await response.json();
    return data;
}
getFlights().then(data => {
    flights = data;
});
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    source = searchForm.source.value;
    destination = searchForm.destination.value;
    filterFlights(source, destination);
})

const filterFlights = (src="", des="") => {
    listDisplay.innerHTML = "";
    filteredFlights = flights.filter(flight =>{
        return flight.source === src && flight.destination === des;
    })
    console.log(filteredFlights);
    let flightDetails = filteredFlights.map(flight => {
        return `<div class="flight-row">
                ${flight.flightNumber} ${flight.airline}
                </div>`;
    })
    console.log(flightDetails);
    updateDisplay(listDisplay, flightDetails)
}

const updateDisplay = (parent, children) => {
    children.forEach(child => {
        parent.innerHTML += child;
    })
}

