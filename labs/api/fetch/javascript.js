document.addEventListener('DOMContentLoaded', function() {
  getPun();
});

const getPun = () => {
  fetch('https://www.punapi.rest/api/pun')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      const punElement = document.getElementById('pun');
      punElement.innerHTML = data.pun;
    });
}
