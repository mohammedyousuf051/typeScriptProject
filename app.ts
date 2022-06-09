

function add(num1: number, num2:number, isNumber: boolean){
    if (isNumber == true){
    console.log(num1 + num2);
    }
    else{
        console.log("type is not a number");  
    }

}

const n1 = 4
const n2 = 5.6
const isNum = true

add(n1, n2, isNum);