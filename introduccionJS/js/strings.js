//Strings o cadenas de texto
const producto = "Monitor 20 pulgadas"; //es la mas comun, se puede usar comillas simples o dobles
const producto1 = 'Monitor 24"';
const producto2 = String("Monitor 24 pulgadas");
const producto3 = new String("Monitor 27 pulgadas");
//cuando se usa el new String() se crea un objeto
console.log(producto);
console.log(producto2);
console.log(producto3);

console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);

console.log(producto.length); //propiedad length, nos da la cantidad de caracteres de la cadena

//IndexOf me permite encontrar en un string, el indice comienza en 0 (retorna la posicion)
console.log(producto.indexOf(2)); //retorna 0
console.log(producto.indexOf("3")); //retorna -1, ya que no lo encuentra

//Includes (retorna true o false)
console.log(producto.includes("4")); //retorna false
console.log(producto.includes("50")); //retorna false
