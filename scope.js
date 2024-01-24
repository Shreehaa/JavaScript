var a = 10//var is used as global scope
{
    let b = 30//let makes to use within the block 
    let a = 40
    console.log(a,b)
}
console.log(a)
function fun()
{
    var s =10
    return s
}
console.log(fun())