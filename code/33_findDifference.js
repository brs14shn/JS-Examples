

//* Given a string "s" consist of characters "A" and "B" only,find the absolute
//*difference between their number of occorrences



//* input:"AAAABB"
//* Output: 2

let str="AAAABBB"
let suma=0;
let sumb=0;

let difference=str.split("").filter((el)=>el=="A" ? suma++ : sumb++)

console.log(Math.abs(suma-sumb))

