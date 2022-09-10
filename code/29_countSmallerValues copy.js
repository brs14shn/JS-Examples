let a=999;

let str=a.toString();

let zaman=0;

while(str.length>1){

    let carpma=str.split("").reduce((total,value)=>total*value,1);
    zaman+=1;
    str=carpma.toString();


}


console.log(zaman);