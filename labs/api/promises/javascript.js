document.addEventListener('DOMContentLoaded', function() {
  const turnRedBtn = document.getElementById('turn-red-btn');
  turnRedBtn.onclick = () => {
    console.clear();

    turnRed().then(
      function(result) {
        console.log(result);
      },
      function(error) {
        console.log(error.message);
      }
    );
  }

  const turnGreenBtn = document.getElementById('turn-green-btn');
  turnGreenBtn.onclick = () => {
    console.clear();

    turnGreen().then(
      function(result) {
        console.log(result);
      },
      function(error) {
        console.log(error.message);
      }
    );
  }
});

const turnRed = () => {
  return new Promise(function(resolve, reject) {
    const title = document.getElementById('title');

    if(!title.classList.contains('bg-red')) {
      title.classList.remove('bg-green');
      title.classList.add('bg-red');
      resolve('Success! It is red now');
    }
    else {
      reject(new Error('Already red'));
    }
  });
}

const turnGreen = () => {
  return new Promise(function(resolve, reject) {
    const title = document.getElementById('title');

    if(!title.classList.contains('bg-green')) {
      title.classList.remove('bg-red');
      title.classList.add('bg-green');
      resolve('Success! It is green now');
    }
    else {
      reject(new Error('Already green'));
    }
  });
}
