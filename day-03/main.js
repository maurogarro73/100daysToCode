/* Condicionales */

/* ------------------------------------------------------------------------------------------------------- */
/* Escribe un programa que solicite un número al usuario e indique si es par o impar usando una estructura condicional if. */
/* let numero = parseInt(prompt('Ingrese un numero'));
if (numero % 2 == 0) {
  alert('Numero par');
} else {
  alert('Numero impar');
} */

/* ------------------------------------------------------------------------------------------------------- */
/* Número positivo o negativo Escribe un programa que solicite al usuario un número y muestre si es positivo, negativo o cero. */
/* let numero = parseInt(prompt('Ingrese un numero'));
if (numero > 0) {
    alert('el numero es positivo');
}
if (numero < 0) {
    alert('el numero es negativo');
}
if (numero == 0) {
    alert('el numero es 0');
} */

/* ------------------------------------------------------------------------------------------------------- */
/* Mayor de edad Crea un programa que solicite al usuario su edad y determine si es mayor de edad (18 años o más). */
/* let numero = parseInt(prompt('Ingrese un numero'));
if (numero >= 18) {
    alert('Es mayor de edad');
} else {
    alert('es menor de edad');
} */

/* ------------------------------------------------------------------------------------------------------- */
/* Calculadora básica Crea un programa que solicite dos números y una operación matemática (+, -, *, /). Realiza la 
operación indicada y muestra el resultado. */
/* let numero1 = parseInt(prompt('Ingrese un numero'));
let numero2 = parseInt(prompt('Ingrese otro'));
let operacion = prompt('Ingrese si es +  -  *  /');

if (operacion == '+') {
    let res = numero1 + numero2;
    alert(`La suma es ${res}`);
}
if (operacion == '-') {
    let res = numero1 - numero2;
    alert(`La resta es ${res}`);
}
if (operacion == '*') {
    let res = numero1 * numero2;
  alert(`La multiplicacion es ${res}`);
}
if (operacion == '/') {
    let res = numero1 / numero2;
    alert(`La división es ${res}`);
} */

/* ------------------------------------------------------------------------------------------------------- */
/* Control de acceso Diseña un programa que simule un sistema de acceso. Solicita al usuario 
un nombre de usuario y contraseña. Si ambos son correctos, muestra un mensaje de bienvenida; si no, 
indica si falló el usuario, la contraseña o ambos. */
/* const usuario = prompt('Usuario');
const pass = prompt('Contraseña');
const userOk = 'admin';
const passOk = '1234'; */

/* if (usuario === 'admin' && pass === '1234') {
  alert('acceso permitido');
}

if (usuario != 'admin') {
  alert('Fallo usuario');
}

if (pass != '1234') {
  alert('Fallo contraseña');
} */

/* if (usuario === userOk && pass === passOk) {
  alert('acceso permitido');
} else if (usuario !== userOk && pass !== passOk) {
  alert('Fallo usuario y contraseña');
} else if (usuario !== userOk) {
  alert('Usuario incorrecto');
} else if (pass !== passOk) {
  alert('Contraseña incorrecta');
} */
