document.addEventListener('DOMContentLoaded', function() {
  const allMightDiv = document.getElementById('all-might');
  const animeContainerDiv = document.getElementById('anime-container');

  setTimeout(() => {
    allMightDiv.classList.add('faded-out');
    allMightDiv.classList.remove('faded-in');

    animeContainerDiv.classList.add('faded-in');
    animeContainerDiv.classList.remove('faded-out');
  }, 1000);
});
