//function without argument and without return type
function fun()
{
    console.log("function without argument and without return type")
    console.log(100)
}
fun()
//function with argument and without return type
function fun1(a,b)
{
    console.log("function with argument and without return type")
    console.log(a,b)
}
fun1(10,20)
//function with argument with return type
function fun2(a,b)
{
    console.log("function with argument with return type")
    return a
}
console.log(fun2(30,40))
//function without argument and with return type
function fun3()
{
    console.log("function without argument and with return type")
    var s = 50
    return s
}
console.log(fun3())