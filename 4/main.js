function handleSubmit(e){
  e.preventDefault();
  let form = e.target;
  let gen = form.genero.value;
  let edad = form.edad.value;
  let msg = document.querySelector("h2");
  msg.innerText="";
  if(gen=="hombre"){
    msg.textContent = (edad>=65) ? "Podés" : "No podés";
  } else msg.textContent = (edad>=60) ? "Podés" : "No podés";
  form.reset();
}
