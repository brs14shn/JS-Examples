

//CALCULATOR

function maths(a,b,opt){
    if(opt=="+"){
        console.log(a+b);
    }
    else if(opt=="-"){
        console.log(a-b);
    }
    else if(opt=="*"){
        console.log(a*b);
    }
    else if(opt=="/"){
        console.log(a/b);
    }
}
maths(10,20,"+"); //30
maths(10,20,"-"); //-5
maths(10,20,"*"); //200
maths(10,20,"/"); //0.5