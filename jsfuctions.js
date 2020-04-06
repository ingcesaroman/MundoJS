function isEven(num1){
    if (num1 % 2 === 0){
        console.log(num1 + " es un numero par");
    }
    else console.log(num1 + " es un numero inpar");
}
//isEven();

function factorial(n){
    var ans = 1;

    for (var i = 2; i <= n; i++){
        ans = ans * i;
    }
    console.log(ans);
}
//factorial(0);

function kebabToSnake(myStr){
    var newStr = myStr.replace(/-/g, "_" );
    return newStr;
}
//kebabToSnake();
