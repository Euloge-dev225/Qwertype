function shuffleArrayExceptFirst(array) {
  if (array.length <= 1) return array; // rien à faire si un seul mot

  const first = array[0]; // garde le premier mot
  const rest = array.slice(1); // copie tous les autres

  // Mélange uniquement le reste
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  const neufMots = rest.slice(0, 9);
  // Retourne le tableau final
  return [first, ...neufMots];
}

let tableaudemotorigin=['Qwertype','Volant','Chien','Crocodile','Haricot','Elephant','Mesquin','Ornithorinque','Locomotive','Amoureux','Anachronique','Labyrinthe','Rocambolesque','Apocalypse','Procrastination','Paradoxe','Melancolie','Indestructible','Algorithmique','Alchimie','Revolutionnaire','Quiproquo'];
let tableaudephraseorigin=['Qwertype est un jeu genial','Je deteste le mensonge ','J\'adore tellement ce poulet','On ira en vacance','Le soleil brille dans le ciel','Tape les mots sans te tromper','La pluie tombe doucement','Le vent souffle fort aujourd\'hui','Apprends en t\'amusant','Je pense donc je suis','A coeur vaillant rien d\'impossible','Rien ne sert de courir il faut partir a point','Tout flatteur vit aux depens de celui qui l\'ecoute','L\'essentiel est invisible pour les yeux','Aux grands maux les grands remedes','Il etait une fois un roi sans royaume'];

let tableaudemot=shuffleArrayExceptFirst(tableaudemotorigin);

let tableaudephrase=shuffleArrayExceptFirst(tableaudephraseorigin);

let score=0;
let result;
let i=0;
let selectedvalue;
let ptn=document.querySelector(".score span");
let ptnscore=document.getElementById("spanscore");
let inputext=document.getElementById("wordortext");
let tempsmot = 5; // secondes
let tempsphrase = 15; // secondes
let tempsRestantmot = tempsmot;
let tempsRestantphrase = tempsphrase;
let timerInterval;
let timerTimeout;
const timerText = document.getElementById("timer");
const timerCircle = document.querySelector(".timer-progress");


function demarrerChronoMot() {
  const longueurTotale = 94; // correspond à r=15
  tempsRestantmot = tempsmot;
  timerText.textContent = tempsRestantmot;
  timerCircle.style.strokeDashoffset = 0;

  timerInterval = setInterval(() => {
    if (tempsRestantmot > 0)
    {
    tempsRestantmot--;
    timerText.textContent = tempsRestantmot;

    const progression = longueurTotale * (1 - tempsRestantmot / tempsmot);
    timerCircle.style.strokeDashoffset = progression;
    }
   else {
      // ⏰ Temps écoulé, on passe au mot suivant
      clearInterval(timerInterval);
     
      i++;
      ptnscore.textContent = i;
      inputext.value = ""
      if (i < tableaudemot.length) {
        champtext.textContent = tableaudemot[i];
        // relancer le chrono pour le mot suivant
        demarrerChronoMot();
      } else {
         champtext.textContent="Le Jeu est fini";
         afficherModalFin();
         jeuActif=false;
      }
    }

  }, 1000);

 
}

function demarrerChronoPhrase() {
  const longueurTotale = 94; // correspond à r=15
  tempsRestantphrase = tempsphrase;
  timerText.textContent = tempsRestantphrase;
  timerCircle.style.strokeDashoffset = 0;

  timerInterval = setInterval(() => {
    if (tempsRestantphrase > 0)
    {
    tempsRestantphrase--;
    timerText.textContent = tempsRestantphrase;

    const progression = longueurTotale * (1 - tempsRestantphrase / tempsphrase);
    timerCircle.style.strokeDashoffset = progression;
    }
   else {
      // ⏰ Temps écoulé, on passe au mot suivant
      clearInterval(timerInterval);
     
      i++;
      ptnscore.textContent = i;
      inputext.value = "";
      if (i < tableaudephrase.length) {
        champtext.textContent = tableaudephrase[i];
        // relancer le chrono pour le mot suivant
        demarrerChronoPhrase();
      } else {
         champtext.textContent="Le Jeu est fini";
         afficherModalFin();
         jeuActif=false;
      }
    }

  }, 1000);
  
}

function arreterChrono() {
  clearInterval(timerInterval);
  clearTimeout(timerTimeout);
}
const modal = document.getElementById("gameOverModal");
const rejouerBtn = document.getElementById("rejouerBtn");
const quitterBtn = document.getElementById("quitterBtn");
// ✅ Fonction pour afficher le modal
function afficherModalFin() {
  modal.style.display = "flex";
}

// ✅ Fonction pour relancer le jeu
function Retry(){
rejouerBtn.addEventListener("click", () => {
  modal.style.display = "none";
  rejouerPartie();
  inputext.focus(); // ta fonction de reset/rejouer
});
}

// ✅ Fonction pour quitter le jeu
function Exit(){
quitterBtn.addEventListener("click", () => {
  modal.style.display = "none";
  
});
}
function rejouerPartie() {
  jeuActif=true;  
  i=0;
  score=0;
  ptnscore.textContent=i;
  ptn.textContent=score;
if(selectedvalue === "1") {
             tableaudemot=shuffleArrayExceptFirst(tableaudemot);
            champtext.textContent = tableaudemot[i];
            timerText.textContent="5";
            demarrerChronoMot();
            
        } else {
             tableaudephrase=shuffleArrayExceptFirst(tableaudephrase);
            champtext.textContent = tableaudephrase[i];
            timerText.textContent="15";
            demarrerChronoPhrase();
            
        }  
  
}
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast", "show");

  // couleur selon le type
  if (type === "success") toast.style.backgroundColor = "green";
  if (type === "error") toast.style.backgroundColor = "crimson";
  if (type === "warning") toast.style.backgroundColor = "orange";

  toast.textContent = message;
  container.appendChild(toast);

  // Disparaît après 3 secondes
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
let jeuActif = true;
function validerNom(nom){
    let regex = /^[a-zA-Z]+$/;
let resultat = regex.test(nom.trim());
if(!resultat || nom.length<=2)
  throw new Error(`le nom  ${nom} est invalid veuillez ressayer`);
else return true
}
function validerEmail(email){
    let regex=new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z]+\\.[a-zA-Z]{2,4}$");
    let resultat=regex.test(email);
    if(!resultat)
    throw new Error(`l'email ${email} est invalid veuillez ressayer`);
    else return true
}
