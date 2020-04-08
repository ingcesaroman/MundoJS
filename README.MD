# JavaScript
* Primitive
* Variables

## Primitive (Basicos)
* Numbers
    * enteros y fraccions
    * modulos (%) remanente de una divicion
* Strings
    * "" o ''\
    ("hola" o 'hola')
    * Concatenado\
    ("Hola"+"Mundo")
    * Escribir caracter especial "\" \
    ("esto es un gion: \\")
    * Propiedad longitud\
    "Hola Mundo".length //[0,1,2,3,4,5,6,7,8,9,10] longitud 10 caracteres 
    * Accesar a un caracter individual\
    "Hola"[4] //"H"
 * Boleanos //True & False
 * null & undefined (nulo & indefinido)  \
   null -> ningun valor alojado en la variable\
   undefined -> Variable sin valor declarado
   
   
## Variables

* Sintaxis: \
var nombreVariable = valor; 
 
##  Metodos
* Default
    * clear();
    * alert();
    * console.log();
    * prompt();

## Comparison Operators
Slides [Comparison](http://webdev.slides.com/coltsteele/deck-4-47#/2)
Ejemplo x = 5

| Operator | Nombre | Ejemplo | Result |
| -------| -------------- | --------- | ----- |
| **>**  | Mayor a        | **x>10**  | False |
| **>=** | Igual o mayor  | **x>=10** | True  |
| **<**  | Menor a        | **x<-50** | False |
| **<=** | Igual o menor  | **x>=100**| True  |
| **==** | Igual a        | **x==5**   | True  |
| **!=** | No sea igual a | **x!=10** | True  |
| **===** | Igual a (Valor y tipo)| **x===5**   | False |
| **!==** | No sea igual a (Valor y tipo) | **x!==5** | True  |

* [operadores logicos](http://webdev.slides.com/coltsteele/deck-4-47#/5)

&& // AND
|| // OR
! // NOT


## Condicional
* if
* if elase
* alse

## Loops
slides [loops](http://webdev.slides.com/coltsteele/loops-58)
* DRY principles\
Don't repeat yourself (don't write 2 equal lines of code)
* Sintaxis\
    * while->`while(somecondition) {//run some code}`
    * for->`for(init; condition; step){//run some code}`
    * ForEach -> `varName.forEach(fuction(var){//run some code});`\
    run some code x number of times base on the array data
    
# Function (Funciones)
* function Para lineas de codigo que se repitan y puedan resumirse en una sola
* Argunments son function con un valor a introducir y ejecutar esas lineas de codigo
* JS Scope:
  * scope global:\
  variable declarado en scope global se puede ocupar dentro de una funcion (padre `[var]` -> hijo `[function]`)   
  * scope special (child):\
  las variables declaradas dentro de una funcion son validas solo dentro de esa funcion\
  No puden ser usadas en otra funcion o scope global.
* Higher Order Functions\
  Son las funciones que toman una funcion como argumento o regresan una  funcion como respuesta.
  
  ## Array
  * Que son?\
  Agrupar in grupo de informacion en una sola linea de cosigo o grupo
  * Sintaxis\
  `var friends = []` o `var friends = new Array()`
  * propiedades\
  `friends.length` //cantidad de datos almacenados
  * Methods (Metodos)
    * Push & Pop\
      Push -> Egregar dato al final de la cadena array ocupada cadena.push ("newdata") `varName.push();`\
      Pop ->  Extrae datos del array y podemos hacer algo diferente con esa info `varName.pop();`
    * Shift & unshift\
      Shift -> Extrae el primer dato del array `varName.shift();`\
      Unshift -> agregar dato nuevo al inicio del array `varName.unshift();`
     * IndexOf\
     ayuda a encontrar un dato especifico y devuelve la ubicacion del mismo --> `varName.indecOf();`
     * Slice
     Copia un dato especifico del array -> `varName.slice();`
     * splice\
     Elimina un dato speficico de la cadena de datos array -> `varName.splice(index, 1);`
     
     ## Object (objetos)
     * Declarar informacion en forma de objetos:\
     `var person = {
        name: "Travis",
        age: 21,
        city: "LA"
      };`
      * Consultar o llamar informacion almacenada
      `console.log(person["name""]);` o `console.log(person.name);`
      
     
     