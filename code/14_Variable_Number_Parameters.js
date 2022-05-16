

//Define a function that takes a variable number of parameters


/*function total(a,b){
    return a+b
}
console.log(total(2,3)) //5
console.log(total(2,3,5)) //5+undefined=NAN

//*/
function total(){
    let sonuc=0;

    for(let i=0;i<arguments.length;i++){
        sonuc+=arguments[i]
    }
    return sonuc   
}
console.log(total(2,3,4,5,4)) 
console.log(total(2,3,4,5,4,56,567))
console.log(total(2,3,4,5,4,345,35,23,23,12,12))




