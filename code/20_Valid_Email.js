
console.log(' CHECK VALİD EMAİL ');

let hak=3;

while(hak>0){
let email=prompt("Enter your an e-mail")
    
const regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-])+([.])+[a-zA-Z0-9.-]{2,3}$/;  //clarusway@gmail.com

if(regex.test(email)==true){
    console.log(`${email} is a valid ` )
    break;
}else{
    if(hak>1){
    console.log(`${email} is a invalid.You have ${hak-1} right. Try again ` )  
    }
    else{
        console.log("Your account is blocked.")
    }
}

hak-=1;
}



