const words = [
  'californication',
  'plataforma5',
  'black',
  'summer',
  'flea',
  'aeroplane',
  'peppers',
  'unlimited',
  'arcadium',
  'love',
  'getaway',
  'stadium',
  'quixoticelixer',
  'quarter',
  'snow',
  'dylan',
  'zephyr',
  'funky',
  'chili'
];

let palabraAleatoria;
let time = 10;
let score = 0;

const picked = [];

const addToDOM = function(palabraAleatoria) {
  let h1 = document.getElementById("randomWord");
  h1.textContent = palabraAleatoria;
}

const randomWords = function() {
  let r;
  if (picked.length === words.length) {
    gameOver(score);
    return;
  }
  do {
    r = Math.floor(Math.random() * words.length);
  } while (picked.includes(r));

  picked.push(r);
  palabraAleatoria = words[r];
  addToDOM(palabraAleatoria);
}
randomWords();

let input = document.getElementById("text");
input.addEventListener('change', function(e) {
  let palabraIngresada = e.target.value;
  if (palabraIngresada === palabraAleatoria) {
    time += 3;
    e.target.value = '';
    updateScore();
    randomWords();
  }
});

const actualizarTiempo = setInterval(() => {
  let timeSpan = document.getElementById("timeSpan");
  time--;
  timeSpan.textContent = time;
  if (time === 0) {
    clearInterval(actualizarTiempo);
    gameOver(score);
  }
}, 1000);

const updateScore = function() {
  let scoreSpan = document.getElementById("score");
  score++;
  scoreSpan.textContent = score;
}

const gameOver = function(score) {
  let main = document.querySelector(".main");
  let container = document.getElementById("end-game-container");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let btn = document.createElement("button");
  if (score==19) h3.textContent = 'Ganaste';
  else           h3.textContent = 'No hay más tiempo';
  p.textContent = `Puntaje: ${score}`;
  btn.innerHTML = 'Volver a empezar';
  btn.addEventListener('click', function() {
    location.reload();
  });
  container.innerHTML = '';
  container.appendChild(h3);
  container.appendChild(p);
  container.appendChild(btn);
  main.style.display='none';
}
