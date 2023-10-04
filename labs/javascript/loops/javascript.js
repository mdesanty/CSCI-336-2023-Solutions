console.log("But there is something to see here...");

const numbers = [4, 3, -2, 0, 1, -5, -1, 6];

let positiveCount = 0;
let negativeSum = 0;

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    positiveCount++;
  }
  else if(numbers[i] < 0) {
    negativeSum += numbers[i];
  }
}

console.log(`Positive count: ${positiveCount}`);
console.log(`Negative sum: ${negativeSum}`);