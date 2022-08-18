
//? DESCRİPTİON:

//Create a function called shortcut to 
//remove the lowercase vowels (a, e, i, o, u ) 
//in a given string.


const VovelRemover=(str)=>{
    return str.split("").map((el)=>(el.replace(/[aeiou]/g, '' ))).join("")
}

console.log(VovelRemover("Erhan"));
console.log(VovelRemover("Barış"));
