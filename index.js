let gpaScore = 6.5;
let type;
type = gpaScore >= 8 ? "hoc sinh gioi" :
    gpaScore >= 6.5 ? "hoc sinh kha" :
    gpaScore >= 5 ? "hoc sinh trung binh" :
    "hoc sinh yeu";
console.log(type);

console.log(caredSolve(1, -3, 2));
console.log(isPrimeNumber(53));

//ax^2 + bx + c = 0
function caredSolve(number1, number2, number3) {
    let delta = number2 * number2 - 4 * number1 * number3;
    return delta < 0 ? "vo nghiem" :
        delta == 0 ? "nghiem kep x1 = x2 = " + (-number2 / 2 * number1) :
        "2 nghiem x1 = " + (-number2 - Math.sqrt(delta)) / (2 * number1) + ", x2 = " + (-number2 + Math.sqrt(delta)) / (2 * number1);
}

function isPrimeNumber(number) {
    let counter = 0;
    for (i = 1; i <= number; i++) {
        if (number % i == 0) {
            counter++;
        }
    }
    return counter == 2 ? "so nguyen to" : "khong phai so nguyen to";
}