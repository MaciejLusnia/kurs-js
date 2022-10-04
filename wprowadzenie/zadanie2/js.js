var first = true;
var second = 65;
var third = `Zmienna 3`;
var fourth = null;
var fifth = undefined;
var sixth = NaN;
var seventh = [`Pierwszy`, `drugi,`, `Trzeci`];
var eight = {
    name: `bartek`,
    age: 18
};

console.log(typeof first === "boolean");
console.log(typeof second === "number");
console.log(typeof third === "string");
console.log(typeof fourth === "null");
console.log(typeof fifth === "undefined");
console.log(typeof sixth === "NaN");
console.log(typeof seventh === "Array");
console.log(typeof eight === "object");
