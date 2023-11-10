document.addEventListener('DOMContentLoaded', function () {
  const blueButton = document.getElementById("blue-button");
  const greenButton = document.getElementById("green-button");
  const redButton = document.getElementById("red-button");
  const purpleButton = document.getElementById("purple-button");
  const textElement = document.getElementById("colorful-text");

  blueButton.onclick = function() {
    textElement.classList.add("blue");
    textElement.classList.remove("green");
    textElement.classList.remove("red");
    textElement.classList.remove("purple");
  }

  greenButton.onclick = function() {
    textElement.classList.remove("blue");
    textElement.classList.add("green");
    textElement.classList.remove("red");
    textElement.classList.remove("purple");
  }

  redButton.onclick = function() {
    textElement.classList.remove("blue");
    textElement.classList.remove("green");
    textElement.classList.add("red");
    textElement.classList.remove("purple");
  }

  purpleButton.onclick = function() {
    textElement.classList.remove("blue");
    textElement.classList.remove("green");
    textElement.classList.remove("red");
    textElement.classList.add("purple");
  }
}, false);