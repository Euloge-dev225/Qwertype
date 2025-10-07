let closeBtn = document.getElementById("closeBtn");
let openbtn=document.getElementById("openbtn");
let overlay = document.getElementById("overlay");
openbtn.addEventListener("click",()=>{
    overlay.classList.add("open");

});
closeBtn.addEventListener("click",()=>{
     overlay.classList.remove("open");
});
overlay.addEventListener("click", (event) => {
  // si on clique directement sur l'overlay (pas sur le contenu)
  if (event.target === overlay) {
    overlay.classList.remove("open");
  }
});
function validerNom(nom){
    let regex = new RegExp("^[a-z]+$");
let resultat = regex.test(nom);
if(!resultat || nom.length<=2)
  throw new Error(`le nom  ${nom} est invalid veuillez ressayer`);
}
function validerEmail(email){
    let regex=new RegExp("[a-z0-9._-]+@+[a-z0-9._-]+\\.[a-z0-9._-]");
    let resultat=regex.test(email);
    if(!resultat)
    throw new Error(`l'email ${email} est invalid veuillez ressayer`);
}
const form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    try{
    const balisenom=document.getElementById("name");
    const baliseEmail=document.getElementById("email");
    const nom = balisenom.value;
    const mail=baliseEmail.value;
   validerNom(nom);
   validerEmail(mail);}
   catch(error){
    console.log("une erreur est survenue:" + error.message )
   }
});