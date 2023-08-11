//ternario es un siclo if en una sola linea
const autenticado = true;

! autenticado ? console.log('usuario autenticado')  : console.log('usuario no autenticado');// vamos a verificar autenticado la sintaxis ?  :, lo que esta del signo de pregunta hacia la derecha pero antes de los dos puntos es lo que se va a ejcutar si la condicion se cumple,lo que esta de los : hacia la derecha es lo que se ejecutara si esta condicion no se cumple,SI LE PONGO SIGNO DE ADMIRACION ESTOY NEGANDO, ES DECIR EL VALOR CONTRARIO A LO QUE TENGA

// doble ternario

const saldo = 600;
const pagar = 700;
const tarjeta = true;

saldo > pagar ? console.log('puedes pagar con saldo')  : tarjeta ? console.log('puedo pagar con targeta') : console.log('no no puedes pagar')