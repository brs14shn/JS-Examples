//Leap year
const year=new Date().getFullYear();
const month=new Date().getMonth();

let dayCount;
switch (month) {
  case 0:
  case 2:
  case 4:
  case 6:
  case 7:
  case 9:
  case 11:
    dayCount = 31;
    break;
  case 3:
  case 5:
  case 8:
  case 10:
    dayCount = 30;
    break;
  case 1:
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) dayCount = 29; //HİNT:case (===) işlemi yapar.İf (==) işlemi yapar
    else dayCount = 28;
    break;
  default:
    dayCount = -1; // invalid month
}

console.log(dayCount); // 29

//HİNT:== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.(if)
//HİNT:=== is used for comparing two variables, but this operator also checks datatype and compares two values.(case)
