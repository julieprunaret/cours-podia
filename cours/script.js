// selecteurs
//document.querySelector('h4').style.color = "salmon";

// si il s'agit d'une sélection dans le DOM ce sera toujours un const car il ne va pas changer)

// Mouse event
// const mousemove = document.querySelector('.mouse-move');
// const questionContainer = document.querySelector('.click-event');

// const response = document.querySelector('p');

// window.addEventListener('mousemove', (e) => {
//     mousemove.style.left = e.pageX + "px";
//     mousemove.style.top = e.pageY + "px";
// })

// window.addEventListener('mousedown', (e) => {
//     mousemove.style.transform = "scale(2) translate(-25%, -25%)";
// })

// window.addEventListener('mouseup', (e) => {
//     mousemove.style.transform = "scale(1) translate(-50%, -50%)";
//     mousemove.style.border = "2px solid teal";
// })

// questionContainer.addEventListener('mouseenter', () => {
//     questionContainer.style.background = "rgb(0,0,0,0.6)";
//     questionContainer.style.transition = "0.3 ease"
// })

// questionContainer.addEventListener('mouseout', () => {
//     questionContainer.style.background = "pink";
//     questionContainer.style.transition = "0.3 ease"
// })

// response.addEventListener('mouseover', () => {
//     response.style.transform = "rotate(2deg)";
// })







// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/* <div> > #id > .class > baliseHTML */

//--------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//---------------------------------------------------
// KeyPress event
 

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
}

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }

  e.key === "z"? ring(e.key): "";
});


//---------------------------------------------------
// scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if(window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
})

//---------------------------------------------------
// form Events

const inputName = document.querySelector('input[type="text"');
const select = document.querySelector('select');
const form = document.querySelector('form');



let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
})

select.addEventListener("input", (e) => {
  language = e.target.value;
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4> Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les cgvs")
  }
  console.log(cgv.checked);

})

// console.log(cgv.checked);

// -----------------------------------------
// Load Event (se déclenche toujours à la toute fin)

window.addEventListener("load", () => {
  // console.log("Document chargé !")
})


// --------------------------------------------
// For each

const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener('click', (e) => {
    e.target.style.background = "red";
  })
})


// --------------------------------------------
// Bubbling !!!! pose pb sur firefox
// fin (de base l'eventlistener est paramétré en mode bubling)

document.body.addEventListener(
  "click", 
  () => {
  console.log("click 1 !");
  }, 
  false
);



// --------------------------------------------
// usecapture
// fin (de base l'eventlistener est paramétré en mode bubling)

document.body.addEventListener(
  "click", 
  () => {
  console.log("click 2 !");
  }, 
  true
);


// --------------------------------------------
// stop propagation

questionContainer.addEventListener('click', (e) => {
  e.stopPropagation();
});

// --------------------------------------------
// remove eventlistener



// --------------------------------------------
// BOM Browser Object Model

//pour savoir la hauteur de la fenetre
//console.log(window.innerHeight)

//pour faire une popup
// window.open('https://www.arte.tv/fr/videos/041246-003-A/raison-et-sentiments-3-3/', "cours js", "height=600, width=800")

//pour fermer la fenetre
//window.close()

//-----
//evenements adossés à window 

//alert("hello")
btn2.addEventListener('click', () => {
  confirm("voulez vous vraiment cliquer ?");
})

//Prompt (récupérer du text)
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom");
  console.log(answer);
  // ci dessous le += permet d'ajouter du html et non de le remplacer
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>"
});


// setTimout est une sorte de compte à rebourd
setTimeout(() => {
  questionContainer.style.borderRadius = "50px";
}, 2000)

// setInterval
let interval = setInterval(() => {
  document.body.innerHTML += 
  "<div class='littleBox'></div>";
}, 2000);

//pour stoper le set interval avec un click
window.addEventListener("click", () => {
  clearInterval(interval);
})

//pour retirer des éléments du DOM au click on peut utiliser e.target.remove()

// location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

//pour remplacer la localisation par une autre
// location.replace("https://www.arte.tv/fr/videos/041246-003-A/raison-et-sentiments-3-3/")

// pour changer l'adresse à la fin du chargement de la page
// window.onload = () => {
//   location.href = "https://www.arte.tv/fr/videos/041246-003-A/raison-et-sentiments-3-3/";
// }


//-----
//evenements adossés à navigator
//console.log(navigator.userAgent);


//-----
//objet history

// console.log(history)
// window.history.back();
// history.go(-2);



//----------------------------------------------------------
// setProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px"); 
  nav.style.setProperty("--y", e.layerY + "px"); 
})

