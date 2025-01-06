/* FUNCIONES */

/* Crea una función llamada sumar que reciba dos números como parámetros, los sume y devuelva el resultado. */

function suma(num1, num2) {
  return num1 + num2;
}
console.log(suma(5, 5));

const suma2 = function (num1, num2) {
  return num1 + num2;
};
console.log(suma2(6, 6));

const suma3 = (num1, num2) => num1 + num2;
console.log(suma3(7, 7));
