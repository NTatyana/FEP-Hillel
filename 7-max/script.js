function max(arr) {
  let maxValue = 0;


  for (let i = 0; i <= arr.langth; i++) {
    if (maxValue <= arr[i]) {
      maxValue = arr[i];
    }
  };

  return maxValue;
}

console.log(max([8]), 'one element test, must return 8');
console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max([8, 17]), '2 elements test, must return 17');