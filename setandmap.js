//set
set=new Set("CSS","HTML","JS")
console.log(set)//no repeatation
set=new Set(["HTML","CSS","JS"])
console.log(set)
set.add("Node")
console.log(set)
console.log("\nforin")
for(i in set){
    console.log(set[i])
}
console.log("\nforof")
for (i of set) {
    console.log(i)
}
//map
map=new Map([["MERN-M","MongoDB"],["MERN-E","Express"],["MERN-R","React"],["MERN-N","Node"]])
console.log(map)
console.log("\nforin")
for(i in map)
{
    console.log(map[i])
}
console.log("\nforof")
for(i of map)
{
    console.log(i)
}
console.log(map.has("MERN-M"))//check present or not
console.log(map.get("MERN-M"))//gives value for the key
map.set([["mentor","prasanth"],["company","Rampex"]])//add value to the map 
console.log(map)
console.log(map.delete("MERN-N"))
console.log(map)
