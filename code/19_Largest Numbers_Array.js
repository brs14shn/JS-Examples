

//TODO:Description


/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].*/


//largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].


let largestOfFour = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]

let bignumbers=largestOfFour.map(element=>Math.max(...element))
console.log(bignumbers) // [ 27, 5, 39, 1001 ]
