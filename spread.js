
fruit = ["apple","banana", "cherry"]
console.log("ARRAY:" , fruit) //show array

console.log("FRUIT" , ...fruit)
console.log("JOIN" , fruit.join(" "))

function menu(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

menu(...fruit) //spread : array
