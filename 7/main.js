let body = document.querySelector("body");
body.addEventListener('click', function(e){ //mousemove el viejo
  let img = document.querySelector("img");
  img.style.top = `${e.clientY}px`;
  img.style.left = `${e.clientX}px`;
});
