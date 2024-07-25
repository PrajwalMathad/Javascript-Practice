// promises with fetch
const getSomething = (resource) => {
    return fetch(resource).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

getSomething('https://jsonplaceholder.typicode.com/todos/1').then(data => {
    console.log(data);
    return getSomething('https://jsonplaceholder.typicode.com/todos/4');
}).then(data => {
    console.log(data);
    return getSomething('https://jsonplaceholder.typicode.com/todos/3')
}).then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

//async and await
const getTodos = async (resource) => {
    const response = await fetch(resource);
    if(response.status !== 200) {
        throw new Error("Error getting data!")
    }
    const data = await response.json();
    return data;
}

getTodos('https://jsonplaceholder.typicode.com/tods/3')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

import sample from './flights.json';
console.log(sample);


const doSomething = async (resourceUrl) => {
    const response = await fetch(resourceUrl);
    if(response.status !== 200) {
        throw new Error("Failed request");
    }
    const data = await response.json();
    return data;
}

const doSomeOtherthing = (resourceUrl) => {
    return fetch(resourceUrl).then((response) => {
        return response.json();
    }).catch((err) => {
        throw new Error(err);
    })
}