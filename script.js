
/*FORMULAIRE DE CONTACT*/

/*var form = document.getElementById("my-form");

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
form.addEventListener("submit", handleSubmit)*/

/*GALERIE*/

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

function displayPics() {
  let photos = document.getElementById('galerie_mini');
  // On récupère l'élément ayant pour id galerie_mini
  let liens = photos.getElementsByTagName('a');
  // On récupère dans une variable tous les liens contenu dans galerie_mini
  let big_photo = document.getElementById('big_pict');
  // Ici c'est l'élément ayant pour id big_pict qui est récupéré, c'est notre photo en taille normale

  let titre_photo = document.getElementById('photo').getElementsByTagName('dt')[0];

  // Et enfin le titre de la photo de taille normale
  // Une boucle parcourant l'ensemble des liens contenu dans galerie_mini
  for (let i = 0; i < liens.length; ++i) {
    // Au clique sur ces liens 
    liens[i].onclick = function () {
      big_photo.src = this.href; // On change l'attribut src de l'image en le remplaçant par la valeur du lien
      big_photo.alt = this.title; // On change son titre
      titre_photo.firstChild.nodeValue = this.title; // On change le texte de titre de la photo
      return false; // Et pour finir on inhibe l'action réelle du lien
    };
  }
}

// Il ne reste plus qu'à appeler notre fonction au chargement de la page
window.onload = displayPics;
