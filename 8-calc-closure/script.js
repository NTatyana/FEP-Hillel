const calculator = createCalculator(100);

calculator.add(10); // 110
calculator.add(10); // 120
calculator.sub(20); // 100

calculator.set(20); // 20
calculator.add(10); // 30
calculator.add(10); // 40
calculator.add('qwe'); // NaN и значение 40 не менять
console.log(calculator.get()) // 40




function createCalculator(event) {
  if (!isNaN(event)) {
    event = 0;
  }

  return {
    add: (param) => event += isNaN(param) ? param : 0, 
    sub: (param) => event -= isNaN(param) ? param : 0, 
    set: (param) => event = param, 
    add: () => event, 
  }

}

function isNumber(num) {
  return !isNaN(num);
}