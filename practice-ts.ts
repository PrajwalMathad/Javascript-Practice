type User = {
    name: string;
    age?: number;
    gender: string;
}

// Only needs name
const c: User = {
    name: "abc",
    gender: "male"
}

// all properties are optional
const a: Partial<User> = {
    age: 23
}

// all properties are required
const bc: Required<User> = {
    name: "abc",
    age: 78,
    gender: "male"
}

console.log(a);


type UserTypes = "admin" | "customer" | "manager";

const users : Record<UserTypes, Partial<User>> ={
    admin: { name: "admin"},
    manager: {},
    customer: {}
}
console.log(users.customer);

type OnlyNameUser = Pick<Partial<User>, "name">;
const d: OnlyNameUser = {
    name : "test"
}

type NoGenderUser = Omit<User, "gender">;
const e: NoGenderUser = {
    name : "test"
}

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type NoCircle = Exclude<Shape, { kind: "circle"; radius: number }>;

type OnlyTriangle = Extract<Shape, { kind: "triangle"; x: number; y: number }>


type funParam = Parameters<(a: string, b: number) => {}>
let h: funParam;