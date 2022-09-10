

//* Given an array of integers and a "target" number, return the numbers of elements that are smaller than the target number


//* input: [1,2,3,4,5] 5
//* Output: **** 4 ****

let nums=[1,2,3,4,5]
let num1=[]

for(let i of nums){
    if(i<5){
        num1.push(i)
    }
}
console.log(num1.length)