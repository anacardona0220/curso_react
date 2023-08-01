// revisaqr mas de una condicion

const saldo = 600;
const pagar = 700;
const tarjeta = true;

// if(saldo > pagar) {
//     console.log('puedes pagar con tu saldo');
// } else if(tarjeta) {
//     console.log('puede pagar con tarjeta');
// }else {
//     console.log('no, no puedes pagar');
// }

if(saldo > pagar || tarjeta) {// al menos uno se cumpla y ejecuta el codigo
    console.log('puedes pagar con tu saldo');

}else {
    console.log('no, no puedes pagar');
}
