// 1. let and const ||
let myAge = 19;
const myName = "Md. Rakibul Islam";
myAge = 20;
// myName = "i don't change or update const value"
// console.log(myAge);
// console.log(myName);

// 2. set dynamic variable value and objects 2 property in template string ||
const myLaptop = {
    brand: "hp",
    color: "silver",
    price: 56000,
    cpu: "core i3 11 gen"
};
const mySelf = `My Name is ${myName}. I am ${myAge} years old. I have a laptop, this brand is: ${myLaptop.brand} and price is: ${myLaptop.price}.`
// console.log(mySelf);

// 3.1 declare a arrow func with param and get output param value divided by 5 ||
const divided5 = num => num / 5;
// console.log(divided5(100));

// 3.2 tow parameter value addition with 2 and The sum(jogfol) will be multiplication with one line ||
const sumMultiplyShort = (num1, num2) => (num1 + 2) * (num2 + 2);
// console.log(sumMultiplyShort(3, 3));

// 3.3 multiply 3 param value ||
const multiply = (x, y, z) => x * y * z;
// console.log(multiply(10, 10, 10));

// 3.4 tow parameter value addition with 2 and The sum(jogfol) will be multiplication with multiline ||
const sumAndMultiply = (num1, num2) => {
    // const num1Result = num1 + 2;
    // const num2Result = num2 + 2;
    const multiplication = (num1 + 2) * (num2 + 2);
    return multiplication;
};
// console.log(sumAndMultiply(3, 3));

// 4. javascript function declaration(regular func) vs arrow function ||
const regularFunc = `this function will be all time multiline and needed writing return when i need value. declare a stored variable if needed. this function is callable.`
const arrowFunc = `this function will be not all time multiline, It can be single line. for single line don't need to type return method and declare a stored variable. but for multiline need to write return. this function is callable.`

// 4.5 var vs let vs const ||
var isVar = "i can change or update value";
let isLet = "i can change or update value";
const isConst = "i can not change or update value";

// 5. multiply each element with 5 of an array, with map and arrow func ||
const numbers = [2, 4, 6, 8, 10, 12];
const multiply5 = numbers.map(number => number * 5);
// console.log(multiply5);

// 6. odd number print in an array with filter arrow func ||
const numbs = [22, 67, 89, 90, 65, 66, 44, 32, 21];
const oddNum = numbs.filter(numb => numb % 2 != 0);
// console.log(oddNum);

// 7. print which element / product price is 5000 tk with find and arrow func ||
const products = [
    { name: "laptop", brand: "hp", price: 56000 },
    { name: "mobile", brand: "samsung", price: 12000 },
    { name: "fan", brand: "walton", price: 5000 },
    { name: "shirt", brand: "nike", price: 5000 },
];
const find5kProducts = products.find(product => product.price == 5000);
// console.log(find5kProducts);

// 7.5 map vs forEach vs filter vs find ||
const isMap = `each element gulo niye kichu ekta(functionality) kore array te return korbe, condition code hole true, false dibe`;
const isForEach = `each element gulo niye kichu ekta(functionality) kore return korbe na or sorasori kichu ekta korbe`;
const isFilter = `conditional code hole filter use korte hoy, condition fulfil kora element gulo ke array te return korbe, true, false dibe na`;
const isFind = `condition fulfil kora first element ke return korbe, array dibe na. true, false dibe na`;


// 8. destructuring in an objects element ||
const desObj = { name: "Sadia", age: 12, address: "Naogaon" };
const { name, address } = desObj;
// console.log(name, address);

// 9. destructuring of an array ||
const desArr = ["samira", "summya", "arib", "sadia"];
const [first, sec, three, four] = desArr;
// console.log(three);

// 10. addition 3 param value and 3rd param default value is 7 ||
const add = (a, b, c = 7) => a + b + c;
// console.log(add(7, 7));

// 11. declare a nested object and inside an array ||
const nestedObj = {
    name: "Md. Rakibul Islam",
    phoneNumber: 3434434,
    address: {
        village: "jaforganj",
        district: ["manikganj", "beutha", "town"],
        roadNumber: 34,
    },
};

// 12 . make optional chaining system ||
const chain = nestedObj.address.district[0];
const chain2 = nestedObj?.country?.district[0];
// console.log(chain);
console.log(chain2);