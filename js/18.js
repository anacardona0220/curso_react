//comparacion y operador estricto
const numero = 20;
const numero1 = "20";

// if(numero == numero1) {// operador de comparacion que no es estricto,solo revisa el valor,este dice que son iguales
if(numero === numero1) {// operador de comparacion que es estricto compara valor y tipo de dato
    console.log(("si son iguales"));
}else {
    console.log("no son iguales");
}

// if(numero === Number(numero1)) {//Number funcion cohersitiva modifica el tipo de dato
if(String(numero) === numero1){//se cambio el primero a string
    console.log(("si son iguales"));
}else {
    console.log("no son iguales");
}
// esto para buleanos
const autenticado = true;
if(autenticado) {
    console.log("si esta autenticado");
}
