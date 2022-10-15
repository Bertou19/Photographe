
/*GALERIE*/

/*Pour filtrer les photos par catégories*/

window.addEventListener('load', (event) => {

  let filters = document.querySelectorAll("#filters a");

  for (let filter of filters) {
    filter.addEventListener("click", function () {
      let tag = this.id;

      let images = document.querySelectorAll("#galerie_mini a img");

      for (let image of images) {
        image.classList.replace("active", "inactive");

        if (tag in image.dataset || tag === "all") {
          image.classList.replace("inactive", "active");
        }

      }

    }
    );
  }
});

/* Pour agrandir les miniatures au centre la page sans avoir à la recharger */

function displayPics() {
  let photos = document.getElementById('galerie_mini');

  let liens = photos.getElementsByTagName('a');

  let big_photo = document.getElementById('big_pict');


  let titre_photo = document.getElementById('photo').getElementsByTagName('dt')[0];


  for (let i = 0; i < liens.length; ++i) {

    liens[i].onclick = function () {
      big_photo.src = this.href;
      big_photo.alt = this.title;
      titre_photo.firstChild.nodeValue = this.title;
      return false;
    };
  }
}
window.onload = displayPics;


/*FORMULAIRE DE CONTACT*/

//Pour envoyer le message du formulaire 


var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Merci pour votre message! A trés bientôt !";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! Il y a eu un problème lors de l'envoi du formulaire, veuillez réessayer. Merci."
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! Il y a eu un problème lors de l'envoi du formulaire, veuillez réessayer. Merci."
  });
}
form.addEventListener("submit", handleSubmit)