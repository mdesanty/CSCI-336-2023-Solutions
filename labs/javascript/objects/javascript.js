console.log("But there is something to see here...");

const numbers = [4, 3, -2, 0, 1, -5, -1, 6];

function processNumbersArray(numbers) {
  const result = {
    positiveCount: 0,
    negativeSum: 0
  }

  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
      result.positiveCount++;
    }
    else if(numbers[i] < 0) {
      result.negativeSum += numbers[i];
    }
  }

  return result;
}

const result = processNumbersArray(numbers);

console.log(`Positive count: ${result.positiveCount}`);
console.log(`Negative sum: ${result.negativeSum}`);
