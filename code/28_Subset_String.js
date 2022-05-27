/*Returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]*/

let str="dog"


let list=[]

for(let i=0;i<str.length;i++){
    for(let m=i+1;m<str.length+1;m++){
        list.push(str.slice(i,m))
    }
}
   console.log(list)

//! Expected Output: ["d", "do", "dog", "o", "og", "g"]*/
