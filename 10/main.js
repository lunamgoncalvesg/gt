let like = 0;
let gracioso = 0;
let sorprendido = 0;

const likeBtn = document.getElementById('likeBtn');
const graciosoBtn = document.getElementById('graciosoBtn');
const sorprendidoBtn = document.getElementById('sorprendidoBtn');

const likeDisplay = document.getElementById('like');
const graciosoDisplay = document.getElementById('gracioso');
const sorprendidoDisplay = document.getElementById('sorprendido');

likeBtn.addEventListener('click', () => {
  like++;
  likeDisplay.textContent = like;
});

graciosoBtn.addEventListener('click', () => {
  gracioso++;
  graciosoDisplay.textContent = gracioso;
});

sorprendidoBtn.addEventListener('click', () => {
  sorprendido++;
  sorprendidoDisplay.textContent = sorprendido;
});

const commentInput = document.getElementById('commentInput');
const commentBtn = document.getElementById('commentBtn');
const errorMsg = document.getElementById('errorMsg');
const commentsList = document.getElementById('commentsList');

commentBtn.addEventListener('click', () => {
  const text = commentInput.value.trim();
  errorMsg.textContent = '';

  if (text.length === 0) {
    errorMsg.textContent = 'Está vacío';
    return;
  }
  if (text.length > 40) {
    errorMsg.textContent = 'Re largo';
    return;
  }

  const commentItem = document.createElement('div');
  commentItem.classList.add('comment-item');
  commentItem.textContent = text;
  commentsList.appendChild(commentItem);

  commentInput.value = '';
});
