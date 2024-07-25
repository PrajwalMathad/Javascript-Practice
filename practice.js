// arrow functions
const sum = (a, b) => a + b;
// console.log(sum(2,3));

// call back functions
const add = (callBackFn) => {
    let a = 50;
    callBackFn(a);
}

add((a) => {
    console.log(a);
})

let a = {
    c: 12,
    d: 20
}
let b = a;
let f = { ...a };
console.log(a);
console.log(b);
console.log(f);
a.c = 50;
console.log(a);
console.log(b);
console.log(f);
let ar2 = new Array(5).fill(0);
console.log("ar2", ar2)
ar2.splice(1, 2);
console.log("ar2", ar2)
console.log("ar2", ar2.join("a"))
let ar = [4, 87, 5, 12, 56, 78, 96];
console.log(ar);
ar.push(3);
ar.pop();
ar.shift();
ar.unshift(1);
ar.sort((a, b) => a - b);
console.log(ar);
console.log(ar.slice(0, 3))
console.log(ar.slice(3))
console.log(ar.slice(0))
console.log(ar.includes(12));
console.log(ar.every(a => a > 0));
console.log(ar.every(a => a > 1));
console.log(ar.some(a => a > 1));
console.log(ar.find(a => a > 1));

console.log(ar.findIndex(a => a > 1));

let test = ar.filter(a => a > 25);
console.log(test);
test = ar.forEach(a => a + 10);
console.log(test);
test = ar.map(a => a + 10);
console.log(test);
let total = ar.reduce((score, a) => {
    score += a;
    return score;
}, 0)
console.log(total);

const double = (...nums) => {
    return nums.map(n => n * 2);
}

console.log(double(1, 4, 5, 6));

const setar = new Set(ar);
console.log(setar);
console.log(setar.has(5));
console.log(setar.keys());
console.log(setar.entries());
console.log(setar.values());
console.log(setar.add(89));

const symbol1 = Symbol("test");
const symbol2 = Symbol("test");
let dfag =  {
    [symbol1] : "asd",
    symbol2 : "asdasd"
}
console.log(dfag[symbol1]);
console.log(symbol1, symbol2, symbol1.toString());
console.log(symbol1.description);
console.log(symbol1 == symbol2);

console.log(Number.MAX_VALUE, Number.POSITIVE_INFINITY, Number.MIN_VALUE, Number.NEGATIVE_INFINITY, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)

let user = {
    name: "test",
    email: "test@test.com",
    age: 25,
    login() {
        // can't access this 
        console.log("Logged in!");
    },
    // use like this in object for creating methods
    logout() {
        // can access this for the object
        console.log("Logged out!" + this.name);
    }
}
let key = 'email';
console.log(Object.getOwnPropertyNames(user));
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.age, user['age'], user[key], typeof user);
user.login();
user.logout();
console.log(Math);

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

// code below groups the elements by the value of their type property.
// const res = Object.groupBy(inventory, ({type}) => type);
// console.log(res);
let m1 = {
    'a': 1,
    'a': 2
}
console.log(m1);
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
map1.set('a', 45).set('c', 56);
console.log(map1.get('a'));
map1.delete('a');
console.log(map1.entries())
map1.forEach((v, k, m) => console.log(v + 5));
console.log(map1.keys())
console.log(map1.values())

for (const [k, v] of map1) {
    console.log(v + 8);
}
console.log(Array.from(map1));
console.log([...map1]);
console.log([...map1.entries()]);


//closures 

function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(4));
console.log(add10(6));
// for(let r=0; r<s.length; r++) {
//     if(sub.has(s[r])) {
//         l = Math.max(sub.get(s[r]), l);
//     }
//     res = Math.max(res, r - l +1);
//     sub.set(s[r], r+1);
// }


console.log(0.1 + 0.2);

(() => {
    console.log("This is IIFE- Immediately Invoked Function Expression");
})();

var module = (() => {
    let i = 10;
    function privateFunction() {
        console.log(i);
    }
    return {
        publicMethod: function () {
            privateFunction();
        }
    }
})();

module.publicMethod();

const person = {
    name: '',
    getName() {
        console.log(this.name);
    }
}
function Person2(name) {
    this.name = name;
}
Person2.prototype.getName = function () {
    console.log(this.name);
}
const p2 = new Person2("bob");
console.log(p2.getName());

const compose = (f, g) => x => f(g(x));
const add1 = x => x + 1;
const double2 = x => x * 2;
const add1ThenDouble = compose(double2, add1);
console.log(add1ThenDouble(2));

class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    getBreed() {
        return this.breed;
    }
}

const lab = new Dog("Scoob", "lab");
console.log(lab.getName(), lab.getBreed());

// Generator functions

function* generatorFunction() {
    yield 'Hello';
    yield 'World';
}
const gen = generatorFunction();
console.log(gen.next().value);
console.log(gen.next().value);


// call(), apply(), bind()
function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name} ${punctuation}`);
}
const p3 = new Person2("Bob");
const p4 = new Person2("Alice");
greet.call(p3, 'Hello', '!'); // calls the function with the given 'this' context and parameters passed inndividually
greet.call(p4, 'Hello', '!')
greet.apply(p3, ['Hi', '#']); // calls the function with the given 'this' context and parameters passed in an array
greet.apply(p4, ['Hi', '#']);
const boundGreet = greet.bind(p3); // returns a function that is permanently bound to the given 'this' context;
boundGreet('Hola', '.');

//symbols : Symbol is a primitive data type that provides unique and immutable identifiers. 
// It's often used to create unique property keys that do not conflict with other property keys.
const uniqueKey = Symbol('key');
const obj = {
    [uniqueKey]: 'value'
};
console.log(obj[uniqueKey]);

const o1 = {
    name: "addsdf",
    age: 67
}
o1.test = 'asdasd';
console.log(o1);
Object.freeze(o1);
o1.tst = "dsf";
console.log(o1);

let ab = {
    a: 1,
    b: 2
}
let cd = { ...ab };
console.log(cd);

const art = [[1,2],[3,4],[5,6],[7,8]];
const mp = new Map(art);
console.log(mp);


// prototypal inheritance
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.login = function() {
    console.log("Loggin in " + this.name);
}
function Admin(...args) {
    User.apply(this, args);
    this.role = "admin";
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.delete = function() {
    console.log("delete");
}
const admin = new Admin("bob", 25);

let regex = /^[A-Za-z0-9a-z]{0,}$/;
let str1 ="AZaz09az";
for(let i =0; i<str1.length; i++) {
    console.log(str1.charCodeAt(i));
}
console.log(String.fromCharCode(65))
console.log(str1.substring(0,4), str1.at(-1), str1.charAt(0), str1.codePointAt(0), str1.endsWith("z09"), str1.endsWith("z09", 2));
console.log(str1.includes("az"), str1.indexOf("az"), str1.lastIndexOf("z"), str1.match(regex), str1.normalize("NFD"), str1.padEnd(14,"01"));
console.log(str1.repeat(2), str1.slice(0,3), str1.split("a"), str1.startsWith("0",2), str1.substring(0,3), str1)
console.log(Boolean(-1), Boolean(0))
console.log(str1.match(regex), regex.test(str1), str1.search(regex));

const x = 2; let y = 4;
function update(arg) {
    return Math.random() + y * arg;
} 
y = 3; 
// ?; 
const result = update(x);
console.log(result);


console.log(global);

let po = [1,2,3];
console.log(po.pop());
console.log(po);


/* tagged templates
Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. 
The remaining arguments are related to the expressions.

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string. (Alternatively, 
it can return something completely different, as described in one of the following examples.)
*/

function taggedTemplate(strings, age, gender) {
    let fname = strings[0];
    let lname = strings[1];
    return fname+ " " + lname+". The person is a " + gender + " with age " + age;
}
const taggedvalue = taggedTemplate(["Prajwal", "Mathad"], 28, "Male");
console.log(taggedvalue);