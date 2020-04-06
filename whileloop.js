console.log("Imprime todos los numeros entre -10 y 19");
var num = -10;

while( num < 20){
    console.log(num);
    num++;
}

console.log("Imprime todos los numeros pares entre 10 y 40");
num = 10

while( num <= 40){
    console.log(num);
    num+=2;
}

console.log("Imprime todos los numeros nones entre 300 y 333");
num = 300

while( num <= 333){
    if (num % 2 !== 0){
    console.log(num);
    }
    num++;
}

console.log("Imprime todos los numeros divisibles entre 5 y 3 entre 5 y 50");
num = 5

while( num <= 50){
    if (num % 5 === 0 && num % 3 === 0){
    console.log(num);
    }
    num++;
}
