{
let btn=document.getElementById("validerBtn");

function valider(){
    if (!jeuActif) return; 
     let texteSaisi = inputext.value;
    i++;
    arreterChrono();
    ptnscore.textContent=i;
    if(texteSaisi.toLowerCase()===champtext.textContent.toLowerCase())
     {score++;
    ptn.textContent=score;
     }
     inputext.value = "";
     selectedvalue = document.querySelector('input[name="choix"]:checked').value;

    if(selectedvalue === "1")
        {champtext.textContent = tableaudemot[i];
        demarrerChronoMot();}
    else 
     {  champtext.textContent = tableaudephrase[i];
        demarrerChronoPhrase();}
    if(i===10)
{
     arreterChrono();
    champtext.textContent="Le Jeu est fini";
    afficherModalFin();
    jeuActif=false;
}
}
Retry();
Exit();
btn.addEventListener("click", valider);

   

   /* 
// Actualise la page
location.reload();
}*/
inputext.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        valider();}
        console.log(event.key);
    });
inputext.focus();
if (window.innerWidth < 700 || window.innerHeight < 535) {
  document.getElementById('mobile-warning').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // empêche le scroll derrière
}

const form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    try{
    const balisenom=document.getElementById("name");
    const baliseEmail=document.getElementById("email");
    const body = `Je viens de faire ${score}/${i} sur Qwertype ! 😎%0A
Essaie de battre mon score sur https://euloge-dev225.github.io/Qwertype/  😉`;

    const nom = balisenom.value;
    const mail=baliseEmail.value;
  validerNom(nom);
   validerEmail(mail);
    balisenom.value = "";
    baliseEmail.value = "";
 location.href = `mailto:${encodeURIComponent(mail)}?subject=Mon score sur Qwertype!&body=${body}`;

   }
  
   
   catch(error){
    showToast(error.message,"error")
  
  console.log('erreur');
   }
   
});

}

