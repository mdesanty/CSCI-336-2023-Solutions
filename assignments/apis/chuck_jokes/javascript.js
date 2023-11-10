document.addEventListener('DOMContentLoaded', () => {
  getJokes();

  const randomJokeModal = document.getElementById('random-joke-modal');
  randomJokeModal.addEventListener('show.bs.modal', () => {
    getRandomJoke();
  });
});

function getJokes() {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    const jokesDiv = document.getElementById('jokes');
    const responseData = xhr.response;

    responseData.forEach(joke => {
      const jokeCol = document.createElement('div');
      jokeCol.classList.add('col');

      const jokeCardHtml =
        `<div class="card">\n` +
        `  <div class="card-header">\n` +
        `    <div class="card-title h5">Joke #${joke.id}</div>\n` +
        `  </div>\n` +
        `  <div class="card-body">\n` +
        `    <p class="card-text">\n` +
        `      ${joke.value}\n` +
        `    </p>\n` +
        `  </div>\n` +
        `  <div class="card-footer">\n` +
        `    <p class="small m-0">in ${joke.category}</p>\n` +
        `    by ${joke.author}\n` +
        `  </div>\n` +
        `</div>\n`;

      jokeCol.innerHTML = jokeCardHtml;
      jokesDiv.appendChild(jokeCol);
    });
  };

  xhr.responseType = 'json';

  xhr.open('GET', 'https://md-chuck-norris-jokes.herokuapp.com/jokes/');
  xhr.send();
}

const getRandomJoke = () => {
  const jokeId = document.getElementById('joke-id');
  const jokeText = document.getElementById('joke-text');
  const jokeCategory = document.getElementById('joke-category');
  const jokeAuthor = document.getElementById('joke-author');

  fetch('https://md-chuck-norris-jokes.herokuapp.com/jokes/random')
    .then(response => response.json())
    .then(data => {
      jokeId.textContent = data.id;
      jokeText.textContent = data.value;
      jokeCategory.textContent = data.category;
      jokeAuthor.textContent = data.author;
    });
};