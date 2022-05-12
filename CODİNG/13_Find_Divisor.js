

//Find the divisors of a number with a function

function divisors(number){
    let numbers=[];
    for(let i=2;i<number;i++){
        if(number%i==0){
            numbers.push(i)
        }
    }
    
    return numbers
}
console.log(divisors(10)) //[2,5]
console.log(divisors(100))
console.log(divisors(34))
console.log(divisors(96))