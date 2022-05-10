// type conversion 

console.log('Welcome to tut5');

let myVar;
myVar=String(34);

//console.log(myVar,(typeof myVar));

let booleanVar=String(true);
//console.log(booleanVar,(typeof booleanVar));

let date=String(new Date());
//console.log(date,typeof(date));

let arr = String([1,2,3,4]);
//console.log(arr.length,typeof(arr));

let i = 75;
//console.log(i.toString());

let stri=Number('1234');
stri = Number(true);
stri=Number([1,2,34,5,6,7,8]);
//console.log(stri,typeof(stri));

let num=parseFloat('34.098');
//console.log(num.toFixed(2),(typeof num)); // to fixed is something which is required to show how many decimal points you would like to show on your webpage provided in the brackets 

// type coercion

let myStr=Number("698"); // if a variable is defined as string and when to try to concat it with a number then rather adding the string and number it CONCATS it with the string 
let myNum=34;   // above i have type casted the string to number 

console.log(myStr+myNum);



