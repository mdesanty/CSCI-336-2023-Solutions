document.addEventListener('DOMContentLoaded', function() {
  const addMovieModal = document.getElementById('add-movie-modal');
  const movieTitleInput = document.getElementById('movie-title');
  const form = document.getElementById('movie-form');

  addMovieModal.addEventListener('hidden.bs.modal', () => {
    form.classList.remove('was-validated');
    form.reset();
  });

  addMovieModal.addEventListener('shown.bs.modal', () => {
    movieTitleInput.focus();
  });

  const movieScore = document.getElementById('movie-score');
  movieScore.onchange = () => {
    const movieScoreHelper = document.getElementById('movie-score-helper');
    movieScoreHelper.innerHTML = getScoreHelperText(movieScore.value);
  }

  form.onsubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if(!form.checkValidity()) {
      console.log('invalid');
    }
    else {
      const movieTr = document.createElement('tr');
      const movieHtml =
        `<td>${document.getElementById('movie-title').value}</td>` +
        `<td>${document.getElementById('movie-genre').value}</td>` +
        `<td>${formatScore(document.getElementById('movie-score').value)}</td>`;

      movieTr.innerHTML = movieHtml;
      document.getElementById('movies-body').prepend(movieTr);

      bootstrap.Modal.getInstance(document.getElementById('add-movie-modal')).hide();
    }

    form.classList.add('was-validated');
  }
});

const getScoreHelperText = (scoreValue) => {
  let helperText;

  switch(scoreValue) {
    case '1':
      helperText = 'Horrible';
      break;
    case '2':
      helperText = 'Bad';
      break;
    case '3':
      helperText = 'Okay';
      break;
    case '4':
      helperText = 'Good';
      break;
    case '5':
      helperText = 'Excellent';
      break;
  }

  return helperText;
}

const formatScore = (scoreValue) => {
  let helperText;

  switch(scoreValue) {
    case '1':
      helperText = '1/5 - Horrible';
      break;
    case '2':
      helperText = '2/5 - Bad';
      break;
    case '3':
      helperText = '3/5 - Okay';
      break;
    case '4':
      helperText = '4/5 - Good';
      break;
    case '5':
      helperText = '5/5 - Excellent';
      break;
  }

  return helperText;
}