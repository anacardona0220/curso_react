//codigo condicional, condicionales
const numero = 1
const numero1 = 2

console.log(numero);
console.log(numero1);

//el codigo siempre se ejecuta de arriba a abajoy el codigo condicional se puede ejecutar una parte y luego la otra en base a siertos valores

const disponible = 4000
const retirar = 20000

if(disponible > retirar) { 
    //se cumple la condicion porque tengo mas dinero del que deseo
    console.log("si puedes retirar");
} else {
    //no se cumple la condicion,ejecutar este codigo
    console.log("lo siento no se puede retirar");
}