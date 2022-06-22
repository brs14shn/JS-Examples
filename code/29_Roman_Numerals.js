
function solution(number){
    let rom="";
    const roman={
     M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 
    }
    
    for(let a in roman){
      while(number>=roman[a]){
        rom+=a;
        number-=roman[a]
      }  
    }
      console.log(rom) 
    }
    
    
    (solution(8))