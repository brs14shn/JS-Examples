

/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.*/


ages = [12, 14, 63, 72, 55, 24]

   
/*write a function inverse_slice() that takes three arguments: 
a list items, an integer a and an integer 
b. The function should return a new list with the slice specified by items[a:b] excluded. For example:

Output: 
inverse_slice([12, 14, 63, 72, 55, 24], 2, 4) //63,72
[12, 14, 55, 24]*/


function inverseSlice(items, a, b) {
return items.splice(a,b-a)
}
console.log(inverseSlice(ages,2,4)) //63,72
console.log(ages) [12,14,55,24]
