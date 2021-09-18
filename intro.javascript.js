/*
declaracion de variables
var
const
let


Tipos de datos
var age = 20221
var mision ="aprender a desarrollar"
var b = true;
var persona = {firstname:"Jhonatan", lastname:"Barrera"}


Matrices
var ciudades = ["Pereira", "Manizales", "Armenia"];
concat(): une matrices
indexof(): debolver la prieraposicion
lastIndexOf(): ultima posicion del elemento
join(): combinar
pop(): eliminar el ultimo elemento
push():agregar elementos
reverse():retroceder
shift(): Elimina el primer elemento
unshift: para agregar un elemeto al inicio
slice(): si necesito una parte de una matriz
sort():ordenar elementos
splice(): 
toString(): conveter elementos en cadena de texto 
valueOf()


Operadores
+
-
*
/
%
++ incrementp
-- decremento
() para dar un orden


Operadores de Comparacion
==
=== las variables sean iguales en valor como en tipo
!= diferente
!== diferente de valor y tipo
?  comparaba para hacer una determinada accion 
<
>
>=
<=


Operador Logico
&&
||
!


Funciones
funtion nombre_de_la_funcion (param1, parame2,....){
    codigo de la funcion
}


Salida de datos 
alert()
confirm()
console.log()
document.write()
prompt()Dialogo de entrada


Funciones Globales
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()
eval()
isFinite()
isNaN()
Number()
parseInt()
parseFloat()


Ciclos
for( var i;i;i)
while
dowhilw
break
continue

Caracteres de escape
\b
\n
\f
\r
\t
\v
\"
\'

Métodos de cadena
charAt(): debuelve un caracter
charCodeAt() : debuel el code que coresponde a un carecter
concat(): concatenar cadenas
indexOf(): primera posicion de algo
lastIndexOf():la ultima posicion
match()
replace(): remplazar parte de la cade
search(): posicion de una palabra
slice(): estraer una parte de la cadena
split(): ressultado de una cadena
valueOf()
toLowerCase(): convieret a minuscula la cadena
toUpperCase(): convierte a mayusculas
Fechas
Date(): creo un objeto de fecha
Date(AAAA, MM, DD, HH, MM, SS, MM): con valores
Date("2021-09-10"):
getDate(): dia del mes
getDay(): dia de la semana
getFullYear(): el año
getHours(): horas
getMinutes(): minutos
getMonth(): los meses
getSeconds()
getMilliseconds(): mili segundos 
Propiedades de nodo (DOM)......
(dom : son las etiquetas
    el primer hijo es deacuerdo a el oren en que se escribe la linea de codigo
    )
attributes: coleccion de todos los atributos
baseURI: proporciona la url
childNodes:dodos secundarios
firtsChild: primer hijo
lastChild. ULTimo hijo
nodeName. NOMBRE DEL NODO
nodeType: TIPO DE NODO 
ownerDocument: quien es el interezaso 
parentNode: padre de un elemento
Métodos de nodo-----
appendChild(): agregar un nuevo hijo
removeChild(): eliminar una etiqueta
cloneNode(): clonar un elemento
insertBefore()
isEqualNode(): comprobar si dos etiquetas son iguales
Métodos de elementos (etiquetas)-----
getAttribute(): para obtener el valor de un atributo
getElementsByTagName():coleccion de tosos los elementos segundarios
getElementsById(): obtener los elementos por id
getElementsByClass():por las clases tambien.
*/

function acumulador() {
    const inputNum = document.getElementById("num");
    let num = parseInt(inputNum.Value);
    inputNum.Value = num +1;

}

function updateview(){
    const inùtText = document.getElementById("entrada").Value
    document.getElementById("salida").innerHTML = inputText;
}

//Declaración de variables
var unaVariable = 'Soy una cadena';  
let nuevaVariable = 54;
const UNA_CONSTANTE = 3.1416;
  
// Objeto
let = {nombre: "Jhonatan", apellido:"Barrera"};

//Array
let ciudades = ['Pereira', 'Manizales', 'Armenia'];

console.log(ciudades);
ciudades.pop();
console.log(ciudades);
ciudades.push('Bogota');
console.log(ciudades);
ciudades.shift();
console.log(ciudades);
ciudades.unshift('Pereira');
console.log(ciudades.join('-'));

//Modulo
console.log(5%2);

//Incremento y Decremento
let acumulador = 0;
acumulador++;
acumulador++;
console.log(acumulador);
acumulador--;
console.log(acumulador)

//Operador ternario
let ternario = acumulador == 1 ? 'V' : 'F';
console.log(ternario)

//Comparacion no exacta
console.log(5=='5');
console.log(7!="7");

//Comparacion exacta
console.log(5==='5');
console.log(7!=="7");

//Operadores logicos
// and &&
// or ||
// not !

//Salida de datos
//alert('Hola Tripulantes');
//console.log(58, 'una cadena');
//confirm('Mensaje');
//prompt('Mensaje');
//document.write('Hola!')

//Ciclo
//for
console.log('For: ');
for (let i=0; i<5; i++) {
    console.log(i);
}
//while
let loop = true;
let contador = 0;
console.log('while: ');
while (loop) {
    console.log(contador)
    contador++;
    if (contador == 5) {
        loop = false;
    }
}
//do-while
loop = true;
contador = 0;
console.log('do-while: ');
do {
    contador++;
    if (contador == 2) {
        continue;
    }
    console.log(contador)
    if (contador == 5) {
        loop = false;
    }
} while (loop)

//Dates
console.log(Date());
let fecha = new Date('2021-09-10');
console.log(fecha);
console.log(fecha.getDay());
console.log(fecha.getFullYear);

//Funciones
function miFuncion() {
    console.log('Hola, soy una funcion!');
}
miFuncion();

// Fat Array Function
const SUMA = (num1, num2) => {
    return num1 + num2;
}
console.log(SUMA(2,3));

const RESTA = (num1, num2) => num1 - num2;
console.log(RESTA(10,3));
}
 
 



