const ACTIONS = {
    '+': sum,
    '-': sub,
    '*': mult,
    '/': div,
}
const ACTION_LIST = Object.keys(ACTIONS);
const action = getAction();
const operantA = getOperant('A');
const operandB = getOperant('B');
const result = calculate(operantA, operandB, action);

showResult(operantA, operandB, action, result);


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

function getOperant(operantName) {
    let num;

    do {
        num = Number(prompt(`Enter operant ${operantName}`))
    } while (!isOperantValid(num))

    return num;
}

function isOperantValid(operant) {
    return !isNaN(operant);
}

function calculate(operantA, operandB, action) {
    return ACTIONS[action](operantA, operandB);
}

function sum(operantA, operandB) {
    return operantA + operandB;
}

function sub(operantA, operandB) {
    return operantA + operandB;
}

function mult(operantA, operandB) {
    return operantA + operandB;
}

function div(operantA, operandB) {
    return operantA + operandB;
}

function showResult(operantA, operandB, action, result) {
    console.log(`${operantA} ${action} ${operandB} = ${result}`);
}






