// var XMLHttpRequest = require('xhr2');

// // Async code. The request is handled when t is resolved
// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 resolve(JSON.parse(request.responseText));
//             } else if (request.readyState === 4) {
//                 reject("Error getting data!");
//             }
//         })
//         request.open('GET', resource);
//         request.send();
//     });
// }

// console.log(1);
// console.log(2);
// getTodos('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     console.log("Promise 1 resolved", data);
//     return getTodos('https://jsonplaceholder.typicode.com/todos/2');
// }).then(data => {
//     console.log("Promise 2 resolved", data);
//     return getTodos('https://jsonplaceholder.typicode.com/todos/3');
// }).then(data => {
//     console.log("Promise 3 resolved", data);
// }).catch(err => {
//     console.log(err);
// })
// console.log(3);
// console.log(4);


// promises
const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve("some data");
        reject("some error");
    })
}

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("first promise");
    }, 1000);
})

const promise2 = new Promise((resolve) => {
    resolve("second promise");
})

const promise3 = new Promise((resolve) => {
    resolve("third promise");
})

Promise.all([promise1, promise2, promise3]).then((messages) => {
    console.log(messages);
})

Promise.race([promise1, promise2, promise3]).then((message) => {
    console.log(message);
})