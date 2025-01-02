/* Día 2: Variables y constantes.
    - Conceptos: var, let, const, tipos de datos (números, strings, booleanos).
    - Ejercicio: Crear variables para almacenar información personal (nombre, edad, ciudad) y mostrarlas en consola.
*/

/* var variable = 'variable con var';
let numero = 24;
const palabra = 'Hola';

console.log('Variable con VAR: ', variable);
console.log('Numero con LET: ', numero);
console.log('Palabra con CONST: ', palabra);
 */

/* ------------------------------------------------------------------------------------------------- */
/* Tipos de datos y constantes
Declara una constante para almacenar el valor de Pi (3.1416) y otra para el número de días en una semana. Muestra sus valores en consola. */
/*
const PI = 3.1416;
const DIAS_DE_SEMANA = 7;
console.log('PI: ', PI);
console.log('Dia de semana: ', DIAS_DE_SEMANA); */

/* ------------------------------------------------------------------------------------------------- */
/* Cambiar valores con let
Declara una variable con let para almacenar tu estado de ánimo. Luego, cambia su valor y muestra ambos en consola. */
/*
let estadoAnimo = 'Contento';
console.log('Mi estado de animo es: ', estadoAnimo);

estadoAnimo = 'Neutro';
console.log('Mi estado de animo es: ', estadoAnimo); */

/* ------------------------------------------------------------------------------------------------- */
/* Combinar variables
Declara tres variables: una para tu nombre, otra para tu apellido, y otra para tu edad. Combínalas en un solo mensaje 
usando concatenación o template strings. */
/* 
let nombre = 'Mauro';
let apellido = 'Garro';
let edad = '34';
console.log('Mi nombre es', nombre, apellido, 'y mi edad es', edad, 'años');
console.log('Mi nombre es ' + nombre + ' ' + apellido + ' y mi edad es ' + edad + ' años');
console.log(`Mi nombre es ${nombre} ${apellido} y mi edad es ${edad} años`); */

/* ------------------------------------------------------------------------------------------------- */
/* Datos booleanos
Crea una variable que indique si tienes mascotas. Usa un valor booleano (true o false) y muéstralo en 
consola con un mensaje descriptivo. */
/* let mascotas = true;
console.log('Tienes mascotas?', mascotas); */

/* ------------------------------------------------------------------------------------------------- */
/* Calcular edad en días
Declara una variable para almacenar tu edad en años. Calcula y muestra tu edad en días (aproximadamente). */
/* let edad = 35;
let edadDias = edad * 365;
console.log(`Tengo ${edad} años y son ${edadDias} días totales`); */

/* ------------------------------------------------------------------------------------------------- */
/* Actualizar datos personales
Declara una variable con let para almacenar tu ciudad. Cambia su valor después de simular una mudanza y muestra ambos valores. */
/* let ciudad = 'Santa Rosa';
console.log('Vivo en', ciudad);
ciudad = 'Buenos Aires';
console.log('Me mude a', ciudad); */

/* ------------------------------------------------------------------------------------------------- */
/* Ejercicio 1: Calculadora de días vividos
Crea un programa que solicite al usuario su edad y calcule cuántos días ha vivido, considerando años
bisiestos (1 bisiesto cada 4 años). Muestra el resultado en consola. */
/* let diasAño = 365;
let edad = parseInt(prompt('Ingrese la edad: '));
let añosBisiestos = Math.floor(edad / 4);
let diasVividos = diasAño * edad + añosBisiestos;

alert(`al tener ${edad} años viviste ${diasVividos} dias totales`); */

/* ------------------------------------------------------------------------------------------------- */
/* Ejercicio 2: Tienda de descuentos
Crea un programa para una tienda que calcule el precio final de un producto después de aplicar un descuento.
Solicita al usuario el precio inicial y el porcentaje de descuento. Muestra el precio con y sin descuento,
usando const para valores que no cambien. */
/* 
const precioProducto = parseInt(prompt('Ingrese el precio del producto'));
const descuento = parseInt(prompt('Ingrese el porcentaje de descuento'));
let precioFinal = precioProducto - (descuento / 100) * precioProducto;

alert(`El producto cuesta $${precioProducto} y al aplicarle un descuento de ${descuento}% cuesta $${precioFinal}`); */

/* ------------------------------------------------------------------------------------------------- */
/* Ejercicio 3: Generador de usuario
Crea un programa que solicite el nombre, apellido y año de nacimiento de un usuario. Genera un nombre de usuario único 
utilizando las primeras tres letras de su nombre, las primeras tres letras de su apellido 
y los últimos dos dígitos de su año de nacimiento. Usa const y let según corresponda. */
/* 
let nombre = prompt('Nombre: ').trim();
let apellido = prompt('Apellido: ').trim();
let añoNac = prompt('Año de nacimiento: ').trim();

alert(
  `Su nombre de usuario es ${nombre.slice(0, 3).toLocaleLowerCase()}${apellido.slice(0, 3).toLocaleLowerCase()}${añoNac
    .slice(0, 3)
    .toLocaleLowerCase()}`
);
 */
