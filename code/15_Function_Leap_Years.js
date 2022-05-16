

//leap year : ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)



//! FUNCTİON DECLARATİON

function LeapYear(){
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log(`${year} is a leap year `);
    }else{
        console.log(`${year} is not a leap year `);
    }
}
let year=parseInt(prompt("Enter a year"));
LeapYear()


//! FUNCTİON EXPRESSİONS

let LeapYearone=function(){
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log(`${year} is a leap year `);
    }else{
        console.log(`${year} is not a leap year `);
    }
}
let yearone=parseInt(prompt("Enter a year"));
LeapYearone()

//! FUNCTİON ARROW

let=yeartwo=parseInt(prompt("Enter a year"));

const LeapYeartwo=()=>
{   
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    return `${year} is a leap year `;
    }else{
    return `${year} is not a leap year `;
    }
}
console.log(LeapYear());
