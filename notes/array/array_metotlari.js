
// * 1-İNDEXOF -find an items index

const myPets=["Dog","Cat","Hamster"];

myPets.indexOf("Cat"); //!1


// * 2-join -create a string from array items

const myPets1=["Dog","Cat","Hamster"];

myPets.join(" and "); // ! Dog and Cat and Hamster

//* 3-slice -split an array at given index

const myPets2=["Dog","Cat","Hamster"];

myPets.slice(1) //! ["Cat","Hamster"]

//* 4-splice-split an array and/or insert new items

const myPets3=["Dog","Cat","Hamster"];


myPets.splice(1,2,Lizard) //! [Dog,Lizard]
//TODO: 1==>>Start parametres
//TODO: 2==>> Delete Counter 
//TODO: "Lizard" =>>append items

// * 5-FOREACH-->loop over an array and access each item

const myPets4=["Dog","Cat","Hamster"];
myPets.forEach(pet => console.log(pet)); //Dog Cat Hamster

// * 6-FİLTER--create a new array based on a filter
const num = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

 //* 7-MAP --loop over an array and run some operation on each item without mutating the original array

 const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

 //* 8- FLAT -flatten an array to single dimension

 const values=[1,2,3,4,[4,56,5]]
console.log(values.flat()) //![1, 2, 3, 4, 4, 56, 5]

//* 9- REDUCE - run a callback on each item and reduce the array to   "sigle value"

const nums = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

//

//* 10 The findIndex() method returns the index of the first array element that passes a test function.

const num_one = [4, 9, 16, 25, 29];
let first1 = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//!3

//* 11 find() method returns the value of the first array element that passes a test function.
const num2 = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//! 25

// *12 -KEYS--returns an Array Iterator object with the keys of an array.
const fruits_ = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}
//* 13 ENTRİES ==>>PAİR 
const fruits__ = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
/* ! 
0,Banana
1,Orange
2,Apple
3,Mango*/
//14-

//*14 EVERY check if every item meets a condition
const num3 = [45, 4, 9, 16, 25];
let allOver_18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
//! FALSE ==>>SİMİLİAR PYTHON ALL ===>>AND
//* 15 SOME  check if every item meets a condition
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
//! TRUE ==>>SİMİLİAR PYTHON ANY ===>>OR

//* 16 SORT
//TODO: for "A-Z"
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
//TODO: for "number"

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b})
