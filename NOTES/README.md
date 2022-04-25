


## DATA TYPES:

***NULL*** primitive type ancak typeof==>>object döner


 ```
   let x;
do{
    x=prompt("Enter a Number: ")

}while(isNaN(x));

console.log(x+2)
```
**STRİNG**

```
let s='Hello';
let m="Hello";
let n=`Merhaba JS`;
console.log(s)
console.log(m)
console.log(n)
```

**BOOLEAN**

```
let x=Boolean("");
let y=Boolean(0);
let z=Boolean(-0)
let q=Boolean(null);

OUTPUT==>>false döner.
```

**OBJECT**

```
const myCar={
    make:"Ford",
    model:"Mustang",
    year:1965,
    color:"Black"

};
```
***Aracın yaşının hesaplanması***

```
myCar.age=function(current){
    console.log(current-this.year)
}
console.log(myCar);
myCar.age(2022)

```
***NOT***:This ifadesi içinde bulunulan object