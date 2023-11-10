document.addEventListener('DOMContentLoaded', function() {
  getDoggo();

  const doggoBtn = document.getElementById('doggo-btn');
  doggoBtn.onclick = getDoggo;

  const doggoImg = document.getElementById('doggo-img');
  doggoImg.onerror = () => {
    doggoImg.src = 'https://i.imgflip.com/849ugl.jpg';
  }
});

const getDoggo = () => {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    const response = xhr.response;

    const doggoImg = document.getElementById('doggo-img');
    doggoImg.src = response.url;
  };

  xhr.responseType = 'json';

  xhr.open('GET', 'https://random.dog/woof.json');
  xhr.send();
}
