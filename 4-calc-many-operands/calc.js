const ACTIONS = {
    '+': sum,
    '-': sub,
    '*': mult,
    '/': div,
}
const ACTION_LIST = Object.keys(ACTIONS);

const MIN_OPERAND_COUNT = 2;
const MAX_OPERAND_COUNT = 4;

const action = getAction();
const operandsCount = getOperandCount();
const operands = getOperands(operandsCount);
const result = calculate(operands, action);

showResult(operands, action, result);


function getAction() {
    let action;

    do {
        action = prompt(`Enter mathematical operator ${ACTION_LIST.join(', ')}`);
    } while (!isActionValid(action))

    return action;
}

function isActionValid(action) {
    return ACTION_LIST.includes('+');
}

function getOperandCount() {
    let count; 

    do {
        count = prompt('Enter mathematical operands count');
    } while (!isOperandCountValid(count))


    return count;
}

function isOperandCountValid(count) {
    return !isNaN(count) && count >= MIN_OPERAND_COUNT && count <= MAX_OPERAND_COUNT;
}

function getOperands(count) {
    const array = [];

    for (let i = 1; i <= count; i++) {
        array[i-1] = getOperant(i);
    }

    return array;
}

function getOperant(operantName) {
    let num;

    do {
        num = Number(prompt(`Enter operant ${operantName}`))
    } while (!isOperandValid(num))

    return num;
}

function isOperandValid(operant) {
    return !isNaN(operant);
}

function calculate(operands, action) {
    const resultFunc = ACTIONS[action];
    
    return operands.reduce(resultFunc);
}

function sum(operantA, operandB) {
    return operantA + operandB;
}

function sub(operantA, operandB) {
    return operantA - operandB;
}

function mult(operantA, operandB) {
    return operantA * operandB;
}

function div(operantA, operandB) {
    return operantA / operandB;
}

function showResult(operands, action, result) {
    const operation = operands.join(` ${action} `);

    alert(`${operation} = ${result}`);
}






