
/*JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/

const today=new Date()
console.log(today)
// console.log(today)  //! 2022-10-08T21:56:49.882Z

const day=today.getDay()  //?  0=PAZAR

const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

// console.log("Today is : " + daylist[day] + ".");

// console.log(day);

const  hour = today.getHours();
const  minute = today.getMinutes();
const  second = today.getSeconds();

//! 2014 ve 2050 yılları arasında hangi 1 Ocak'ın Pazar olduğunu nasıl buluruz.

console.log('--------------------');


for(let year=2014; year<=2050;year++){
    const d=new Date(year,0,1);
    if(d.getDay()==0){
        console.log("1st January is being a Sunday"+year)
    }
}

