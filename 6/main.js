//1
console.log("\nEjercicio 1, pasando 8 como nota");
const getRes = function(n){
  switch (true) {
    case (n<2):
      console.log("Muy mal");
      break;
    case (n<5):
      console.log("Mal");
      break;
    case (n<7):
      console.log("Tan cerca, pero tan lejos");
      break;
    case (n<8):
      console.log("Bien!");
      break;
    case(n<=10):
      console.log("Muy bien!");
      break;
    default:
      console.log("No sé, chau");
  }
}
getRes(8);


//2
console.log("\n\nEjercicio 2, pasando 4, 7 y hola");
const getBigger = function(a, b, w){
  if(a>b) console.log(a);
  else if (b>a) console.log(b);
  else console.log(w[0] + w[w.length-1]);
}
getBigger(4,7,"hola");


//3
console.log("\n\nEjercicio 3");
const frootloop = function(){
  let frutasYVerduras = [
    {fruta:"banana"},
    {verdura:"apio"},
    {fruta:"manzana"},
    {fruta:"frutilla"},
    {verdura:"zanahoria"},
    {fruta:"kiwi"},
    {fruta:"sandia"},
    {fruta:"melon"},
    {verdura:"repollo"},
    {fruta:"mango"}
  ]
  let frutas = [];
  let verduras = [];
  for(let item of frutasYVerduras){
    if(item.fruta) frutas.push(item);
    else verduras.push(item);
  }
  console.log("Frutas: ", frutas);
  console.log("Verduras: ", verduras);
}
frootloop();


//4
console.log("\n\nEjercicio 4");
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];
let unidades = [1, 2, 3, 4];
let gaseosasEnStock = {};
const dispenser = function(unidades, gaseosas){
  for(let i=0; i<gaseosas.length; i++)
    gaseosasEnStock[gaseosas[i]] = unidades[i];  
  console.log(gaseosasEnStock);
}
dispenser(unidades, gaseosas);


//5
console.log("\n\nEjercicio 5");
let test = [
  {nombre: "Juan", edad:19},
  {nombre:"Mario", edad: 22}
];
const addYear = function(test) {
  for(let i=0; i<test.length; i++){
    test[i].año = 2025 - test[i].edad;
  }
  console.log(test);
}
addYear(test);
