//for loop
sum=0
for(var index=1;index<=10;index++)
{
    sum+=index;
}
console.log(sum)
for(row=0;row<5;row++)
{
    console.log("*")
}
console.log(true,false,"shree",23)

//for in loop 
var a = {"MERN-M":"MongoDB","MERN-E":"Express","MERN-R":"React","MERN-N":"Node"}
console.log("forin_loop\n")
for (const index in a) {
   console.log("The value present in ",index," is ",a[index])
}
//for of loop
var b = ["MERN-M","MongoDB","MERN-E","Express","MERN-R","React","MERN-N","Node"]
console.log("\nforof_loop\n")
for (const i of b) {
    console.log(i)
}
var c = ["MongoDB","Express","React","Node"]
console.log("\nforeach_loop\n")
c.forEach(element => {
    console.log(element)
});
//while loop
console.log("\nwhile")
i=0
sum=0
while(i<10){
    sum+=i
    i++
}
console.log(sum)
//do while
console.log("\ndo while")
i=0
sum=0
do{
    sum+=i
    i++
}while(i<10);
console.log(sum)