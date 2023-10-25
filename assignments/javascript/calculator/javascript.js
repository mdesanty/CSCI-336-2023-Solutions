document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-button');

  addButton.onclick = function() {
    if(formIsValid()) {
      const sum = getNumberA() + getNumberB();
      setResultValue(sum);
    }
    else {
      setResultValue('Please provide two numbers.', true);
    }
  }

  const subtractButton = document.getElementById('subtract-button');

  subtractButton.onclick = function() {
    const numberA = getNumberA();
    const numberB = getNumberB();

    if(formIsValid()) {
      const difference = numberA - numberB;
      setResultValue(difference);
    }
    else {
      setResultValue('Please provide two numbers.', true);
    }
  }

  const resetButton = document.getElementById('reset-button');

  resetButton.onclick = function() {
    document.getElementById('number-a').value = undefined;
    document.getElementById('number-b').value = undefined;
    setResultValue('n/a');
  }

  function getNumberA() {
    return Number(document.getElementById('number-a').value);
  }

  function getNumberB() {
    return Number(document.getElementById('number-b').value);
  }

  function setResultValue(value, isError = false) {
    const resultValueSpan = document.getElementById('result-value');

    if(isError)
      resultValueSpan.classList.add('error-message');
    else
      resultValueSpan.classList.remove('error-message');

    resultValueSpan.textContent = value;
  }

  function formIsValid() {
    const numberAValue = document.getElementById('number-a').value;
    const numberBValue = document.getElementById('number-b').value;

    const numberA = Number(numberAValue);
    const numberB = Number(numberBValue);

    let valid = true;

    if(numberAValue == undefined || numberAValue == '' || numberBValue == undefined || numberBValue == '')
      valid = false;

    if(isNaN(numberA) || isNaN(numberB))
      valid = false;

    return valid;
  }
});