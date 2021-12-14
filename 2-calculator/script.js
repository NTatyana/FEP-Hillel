function getNumber() {
    const num = prompt('Enter number');

    if (isNaN(num)) {
        console.error('Wrong enter');
        return;
    }

    return Number(num);
}



function mathematicalОperator() {
    const operator = prompt('Enter mathematical operator');
    return operator;
}




function sum(a, b) {
    console.log (`${a} + ${b} = ${a + b}`);
}

function sub(a, b) {
    console.log (`${a} - ${b} = ${a - b}`);
}

function mult(a, b) {
    console.log (`${a} * ${b} = ${a * b}`);
}

function div(a, b) {
    console.log (`${a} / ${b} = ${a / b}`);
}



function result (a, b, c) {

    if (c == '+') {

        const d = sum(a, b);

    } else if (c == '-') {

        const d = sub(a, b);

    } else if (c == '*') {

        const d = mult(a, b);

    } else if (c == '/') {

        const d = div(a, b);

    }

}




alert ("Let's start counting?");

const value1 = getNumber();
const valueOperator = mathematicalОperator()
const value2 = getNumber();

const effect = result(value1, value2, valueOperator);





