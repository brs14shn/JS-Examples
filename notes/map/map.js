
//******   Array Map    */

//? =======>>> https://stackabuse.com/guide-to-javascripts-map-method/      ==  <<<======

//* foor loop

const mathScores = [39, 50, 45, 41, 50]; 
let newScores = [];
  
for (let i = 0; i < mathScores.length; i++) {
    newScores.push(mathScores[i] + 5);
}

console.log(newScores); // [44,55,50,46,55]



//* Bir update işleminde kullanılır.

//*The Array.map() method iterates across an array and applies a callback function on each element, returning the resulting elements in a new array.

//*Syntax

// "const newArray = oldArray.map((currentValue, index, array)=>
// {
//     // Do stuff with currentValue
// }) 

const mathScores1 = [39, 50, 45, 41, 50];
  
mathScores.map((currentValue, index, array) => {
    console.log('Current value:' + currentValue);
    console.log('Index:' + index);
    console.log('Array:' + array);
    return currentValue;
})
//Output:
"Current value:39"
"Index:0"
"Array:39,50,45,41,50"

"Current value:50"
"Index:4"
"Array:39,50,45,41,50"

//? ==================="What's the difference between map() and forEach()?"===============

"The main distinction between these two methods is that the map() function returns a new array, whilst the forEach() method does not - it alters the original array.in each iteration of the map() function, you'll return a transformed element. With forEach(), you don't return them, but can run functions on that change elements in-place. Though, you don't even have to run a function on the element!"

//? ===================USİNG MAP() WİTH FİLTER=========================

const mathStudents = [
    {
      name: 'Jane',
      score: 60,
      enrollmentYear: 2019
    },
    {
      name: 'Emmy',
      score: 40,
      enrollmentYear: 2020
    },
    {
      name: 'John',
      score: 43,
      enrollmentYear: 2019
    },
    {
      name: 'Linda',
      score: 20,
      enrollmentYear: 2019
    }
]

//* Kayıt tarihi 2020 ve önce olan öğrencileri al ve puanı 40'ın altında olanları kaldı üstünde olanları geçti olarak öğrenci isimleri ise birlikte oluştur.

const passingStudents=mathStudents.
filter((el)=>el.enrollmentYear<2020)
.map((student)=>{
    if(student.score>40){
        return student.name + ": passing"
    }else return student.name + ": not passing"
})

console.log(passingStudents) //["Jane: passing","John: passing","Linda: not passing"]


//? ===================USİNG MAP() ON AN OBJECT=========================
const scores = { math: 50, English: 70, Physics: 45, Agric: 60 }; 
const newScore=Object.values(scores) //! liste döner
.map((score)=>score+5);
console.log(newScore)  //*  [55,75,50,65]


//* ASCII-CODE
const string="Javascript";
const stringArr=string.split("");
const ascııArr=stringArr.map((el)=>el.charCodeAt(0))

console.log(ascııArr);