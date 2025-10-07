    let listeRadio=document.querySelectorAll('input[type="radio"][name="choix"]');
    let champtext=document.querySelector(".champtext");
    
    listeRadio.forEach(radio => {
    radio.addEventListener('change', () => {
        selectedvalue = document.querySelector('input[name="choix"]:checked').value;
        i=0;
        score=0;
        ptnscore.textContent=i;
        ptn.textContent=score;
       
        if(selectedvalue === "1") {
             tableaudemot=shuffleArrayExceptFirst(tableaudemot);
            champtext.textContent = tableaudemot[i];
            timerText.textContent="5";
            
        } else {
             tableaudephrase=shuffleArrayExceptFirst(tableaudephrase);
            champtext.textContent = tableaudephrase[i];
            timerText.textContent="15";
            
        }
        inputext.value = ""
        inputext.focus();
    });
});
