
 /*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.*/


a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
/*
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

//SOLUTİON-1

function longest(s1, s2) {
    let x = s1.concat(s2);
    let y = x.split("").sort();
    let z = new Set(y);
    return (Array.from(z).join(""));  
   
  }
   console.log(longest(a,b))
   
   //SOLUTİON-2
   
   console.log([...new Set(a+b)].sort().join(""))