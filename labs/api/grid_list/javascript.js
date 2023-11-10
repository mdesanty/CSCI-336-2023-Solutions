document.addEventListener('DOMContentLoaded', function() {
  fadeStuff();
  buildCards();
});

const fadeStuff = () => {
  const allMightDiv = document.getElementById('all-might');
  const animeContainerDiv = document.getElementById('anime-container');

  setTimeout(() => {
    allMightDiv.classList.add('faded-out');
    allMightDiv.classList.remove('faded-in');

    animeContainerDiv.classList.add('faded-in');
    animeContainerDiv.classList.remove('faded-out');
  }, 1000);
}

const buildCards = () => {
  const cardData = [
    {
      title: 'Overlord',
      description: 'A player gets stuck in an MMORPG for real. He has ton of power and seems to be the only real player there.',
      image: 'https://i.pinimg.com/originals/9f/1d/9f/9f1d9fde4c932a117843d9f43478722e.jpg',
      link: 'https://www.imdb.com/title/tt4869896/'
    },
    {
      title: 'One Punch Man',
      description: "The main character is a hero for fun. But he isn't having as much fun as he'd like. He defeats all enemies with a single punch and has become very bored.",
      image: 'https://static.posters.cz/image/750/plakaty/one-punch-man-destruction-i61317.jpg',
      link: 'https://www.imdb.com/title/tt4508902/'
    },
    {
      title: 'Death Note',
      description: 'A young man finds a strange note book that turns out to come with even stranger powers - as well as a strange companion.',
      image: 'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
      link: 'https://www.imdb.com/title/tt0877057/'
    },
    {
      title: 'Hunter x Hunter',
      description: 'Youngster Gon embarks on a journey to become a professional hunter. He meets like minded friends along the way.',
      image: 'https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
      link: 'https://www.imdb.com/title/tt2098220/'
    },
    {
      title: 'Invincible',
      description: 'A new show with a more traditional animation style (does it count as anime?... I would have said no but Google seems to disagree). Violent and grousome - not for the feignt of heart.',
      image: 'https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      link: 'https://www.imdb.com/title/tt6741278/'
    },
    {
      title: 'Fist of the North Star',
      description: 'Kenshiro might be the most silly and OP human character in all of anime. This show is unintentionally funny but randomly awesome at the same time.',
      image: 'https://the-comics-journal.sfo3.digitaloceanspaces.com/wp-content/uploads/2022/03/Fistcover.jpg',
      link: 'https://www.imdb.com/title/tt0091211/'
    },
    {
      title: 'Bleach',
      description: "Ichigo can talk to ghosts. Turns out he randomly has tons of spirit. Then he becomes the only human soul reaper - even if he's just a substitute.",
      image: 'https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
      link: 'https://www.imdb.com/title/tt0434665/'
    },
    {
      title: 'My Hero Academia',
      description: 'All Might is ready to retire so he passes his quirk (power) down to Midoriya a kid with a ton of heart but who is otherwise very week.',
      image: 'https://m.media-amazon.com/images/M/MV5BMjRlNTgwMWItYTAxMS00ODQ2LTlhOTMtOWRjMjlhYTQxNjlkXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
      link: 'https://www.imdb.com/title/tt5626028/'
    },
    {
      title: 'Assassination Classroom',
      description: 'Maybe one of the stranger shows on my list. A yellow octopus like being has destroyed the moon and will do the same to the Earth unless his students can kill him. He is teaching them to be killers.',
      image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/dd3f02603f8c7bedcc8962b6a6fb392e.jpeg',
      link: 'https://www.imdb.com/title/tt3837246/'
    },
    {
      title: 'The Seven Deadly Sin',
      description: 'Will this unlikely group of heros save the kingdom? A great modern anime!',
      image: 'https://flxt.tmsimg.com/assets/p12296875_b_v9_aa.jpg',
      link: 'https://www.imdb.com/title/tt3909224/'
    },
    {
      title: "Todd McFarlane's Spawn",
      description: "This show only aired on HBO. It's dark and gritty. Definitely prepare yourself for very mature content.",
      image: 'https://m.media-amazon.com/images/M/MV5BYTViMzhmMjItMDcwOS00NzYzLWE3MjMtY2M2MWZhMzM1N2E4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
      link: 'https://www.imdb.com/title/tt4641774/'
    },
    {
      title: 'Baki',
      description: 'Baki is not interested in being the strongest there is... he just wants to be stronger than his dad. It just so happens his father is the strongest there is.',
      image: 'https://m.media-amazon.com/images/M/MV5BMmQxZmRmNmUtZWUxNi00NzhiLWEwNzEtZTUyZWRhOWY5Yjg2XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg',
      link: 'https://www.imdb.com/title/tt12871314/'
    },
    {
      title: 'Chainsaw Man',
      description: 'An impoverished young man (Denji) makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws.',
      image: 'https://static.displate.com/857x1200/displate/2021-08-12/6c52982c0b3872edd54a417a7dcbcf50_d8945d6d14fb41111efd66dbc21d3992.jpg',
      link: 'https://www.imdb.com/title/tt13616990/'
    },
    {
      title: 'The Legend of Vox Machina',
      description: 'After saving the realm from evil and destruction at the hands of the most terrifying power couple in Exandria, Vox Machina is faced with saving the world once again-this time, from a sinister group of dragons known as the Chroma Conclave.',
      image: 'https://m.media-amazon.com/images/M/MV5BYzJjZDkxMDgtZDBkNC00ZGJlLTk0NzgtZDhjZGIxZDAzZDY2XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
      link: 'https://www.imdb.com/title/tt11247158/'
    },
    {
      title: 'Kengan Ashura',
      description: 'Follow Tokita Ohma as he becomes stronger with each match of this insane hand-to-hand combat tournament.',
      image: 'https://pics.filmaffinity.com/Kengan_Ashura_TV_Series-646150097-large.jpg',
      link: 'https://www.imdb.com/title/tt9058134/'
    }
  ];

  const cardsRow = document.getElementById('cards');

  cardData.forEach(card => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');

    const cardHtml =
    `<div class="card">\n` +
    `  <img src="${card.image}" alt="${card.title}" class="card-img" />\n` +
    `  <div class="card-body">\n` +
    `    <h5 class="card-title">${card.title}</h5>\n` +
    `    <p class="card-text">${card.description}</p>\n` +
    `  </div>\n` +
    `  <div class="card-footer">\n` +
    `    <a href="${card.link}" target="_blank" class="btn btn-primary">Learn more</a>\n` +
    `  </div>\n` +
    `</div>`;

    colDiv.innerHTML = cardHtml;
    cardsRow.appendChild(colDiv);
  });
}