function add(num1, num2, isNumber) {
    if (isNumber == true) {
        console.log(num1 + num2);
    }
    else {
        console.log("type is not a number");
    }
}
var n1 = 4;
var n2 = 5.6;
var isNum = true;
add(n1, n2, isNum);
