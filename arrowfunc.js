//arrow function
var fun = ()=>
console.log("Hello")
fun()
//hoisting remembarance
var arr = [10,20,30]
var a,b,c = arr
console.log(a,b,c)
//destructuring operator
var arr = [10,20,30]
var [a,b,c] = arr
console.log(a,b,c)  
//spread operator
var arr = [10,20,30]
var a = [...arr,50,60,70]
console.log(a)