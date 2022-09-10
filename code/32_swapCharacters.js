




//* Given a string "s" swap first and last characters of "s" and return the result


//*input :complete
//*output:eompletc

let str="binary"
let arr=str.split("")

for (let i=0;i<=arr.length;i++){
    let temp=arr[0]
    arr[0]= arr[arr.length-1]
    arr[arr.length-1]=temp
    
}
console.log(arr.join(""))