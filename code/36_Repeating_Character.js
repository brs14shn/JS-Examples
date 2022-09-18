
let inputString="hardcorecoder";

let length=inputString.length

let repeat={}


for(let i =0;i<length;i++){
    let ch=inputString[i]
    repeat[ch] =repeat[ch] ? repeat[ch]+1 :1
    //console.log(repeat);
}

let keys=Object.keys(repeat)
//console.log(keys);

for (let i of keys){
    //console.log(i);
    if(repeat[i]>=2){
       // console.log(i);
        return
    }
}
