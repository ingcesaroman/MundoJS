//while->`while(somecondition) {//run some code}`
//for->`for(init; condition; step){//run some code}`

console.log("Imprime todos los numeros entre -10 y 19");
//var num = -10;
//while( num < 20){
//    console.log(num);
//    num++;
//}
for (var i=10; i < 20; i++){
    console.log(i);
}

console.log("Imprime todos los numeros pares entre 10 y 40");
//num = 10
//while( num <= 40){
//    console.log(num);
//    num+=2;
//}
for (var i=10; i <=40; i+=2){
    console.log(i);
}

console.log("Imprime todos los numeros nones entre 300 y 333");
//num = 300
//while( num <= 333){
//    if (num % 2 !== 0){
//    console.log(num);
//   }
//    num++;
//}
for (var i=300; i <= 333; i++){
    if (i % 2 !== 0){
    console.log(i);
    }
}

console.log("Imprime todos los numeros divisibles entre 5 y 3 entre 5 y 50");
//num = 5
//while( num <= 50){
//    if (num % 5 === 0 && num % 3 === 0){
//    console.log(num);
//    }
//    num++;
//}
for (var i=5; i<=50; i++){
    if (i % 5 === 0 && i % 3 === 0){
    console.log(i)
    }
}