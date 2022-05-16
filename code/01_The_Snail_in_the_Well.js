

/* The snail climbs up 7 feet each day and slips back 2 feet each night.
How many days will it take the snail to get out of a well with the given depth?*/

var depth=31
var day = 0;
var total = 0;

while(total<depth){
    day = day + 1;
    total = total + 7;
    if(total >= depth){
        console.log(day);
        break;
    }
        total = total - 2;
    }
    
    




