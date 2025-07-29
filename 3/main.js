const escenas = {
  inicio: {
    texto: "Elegí un camino",
    fondo: "https://static.vecteezy.com/system/resources/thumbnails/048/096/926/small/two-way-street-with-direction-signs-for-future-step-in-business-illustration-vector.jpg",
    opciones: [
      { texto: "Izquierda", siguiente: "izquierda" },
      { texto: "Derecha", siguiente: "derecha" }
    ]
  },
  izquierda: {
    texto: "Alguien te habla",
    fondo: "https://gemmaschiebefineart.wordpress.com/wp-content/uploads/2014/01/the-hard-times.jpg",
    opciones: [
      { texto: "Responder", siguiente: "responder" },
      { texto: "Ignorar", siguiente: "ignorar" }
    ]
  },
  derecha: {
    texto: "Hay un animal",
    fondo: "https://images.hive.blog/DQmTLeCqJaAUL6dNbM1j9cx6jzRbUsrgyZHZEKAukJLCFxQ/7.jpg",
    opciones: [
      { texto: "Hacerle mimos", siguiente: "mimos" },
      { texto: "Ignorar", siguiente: "ignoraranimal" }
    ]
  },
  responder: {
    texto: "Te mató",
    fondo: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/smart-phone-gravestone-funeral-drawing-frank-ramspott.jpg",
    opciones: []
  },
  ignorar: {
    texto: "Te salvaste",
    fondo: "https://img.freepik.com/premium-vector/woman-sofa-comfortable-furniture-vector-sketch-illustration_231873-6650.jpg",
    opciones: []
  },
  mimos: {
    texto: "Sos un genio",
    fondo: "https://img.freepik.com/premium-vector/smiling-female-employee-with-prize-hands_160308-5179.jpg",
    opciones: []
  },
  ignoraranimal: {
    texto: "Te van a pasar cosas feas por ser malo",
    fondo: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/smart-phone-gravestone-funeral-drawing-frank-ramspott.jpg",
    opciones: []
  }
};

const textoDiv = document.getElementById("texto");
const opcionesDiv = document.getElementById("opciones");
const fondoDiv = document.getElementById("fondos");

function mostrarEscena(escenaId) {
  const escena = escenas[escenaId];
  textoDiv.textContent = escena.texto;

  opcionesDiv.innerHTML = "";
  fondoDiv.innerHTML = "";

  const bg = document.createElement("img");
  bg.src = escena.fondo;
  fondoDiv.appendChild(bg);

  if (escena.opciones.length === 0) {
    const reiniciarBtn = document.createElement("button");
    reiniciarBtn.textContent = "Reiniciar";
    reiniciarBtn.className = "opcion";
    reiniciarBtn.onclick = () => mostrarEscena("inicio");
    opcionesDiv.appendChild(reiniciarBtn);
  } else {
    escena.opciones.forEach(opcion => {
    const btn = document.createElement("button");
      btn.textContent = opcion.texto;
      btn.className = "opcion";
      btn.onclick = () => mostrarEscena(opcion.siguiente);
      opcionesDiv.appendChild(btn);
    });
  }
}

mostrarEscena("inicio");
