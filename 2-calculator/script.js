function getNumber() {
    const num = prompt('Enter number');

    if (isNaN(num)) {
        console.error('Wrong enter');
        return;
    }

    return Number(num);
}


function mathematicalОperator() {
    return (prompt('Enter mathematical operator'));
}


function sum(number1, number2) {
    return (`${number1} + ${number2} = ${number1 + number2}`);
}

function sub(number1, number2) {
    return (`${number1} - ${number2} = ${number1 - number2}`);
}

function mult(number1, number2) {
    return (`${number1} * ${number2} = ${number1 * number2}`);
}

function div(number1, number2) {
    return (`${number1} / ${number2} = ${number1 / number2}`);
}


function result (number1, number2, action) {

    if (action == '+') {

        const d = sum(number1, number2);
        console.log (d);

    } else if (action == '-') {

        const d = sub(number1, number2);
        console.log (d);

    } else if (action == '*') {

        const d = mult(number1, number2);
        console.log (d);

    } else if (action == '/') {

        const d = div(number1, number2);
        console.log (d);

    }
}


const value1 = getNumber();
const valueOperator = mathematicalОperator()
const value2 = getNumber();

const effect = result(value1, value2, valueOperator);





