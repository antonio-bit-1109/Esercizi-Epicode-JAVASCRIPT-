// funzione che aggiunge porzione di codice quando clicco  (aggiunge)
// funzione che gestisce quando è completo sbarr riga   (riga sbarrata)
// funzione che cancella il task quando completato      (cancella task completato )

const campoInput = document.getElementById("campoInput"); 
const bottone = document.getElementById("bottone"); 
const section = document.getElementById("section"); 
const containerDiv = document.getElementById("container"); 
let array = []; 

bottone.addEventListener("click" , main)


campoInput.addEventListener("keydown" , (event) => {
   if (event.key === "Enter") {
      main(); 
   }
})


function main() {

   let mioTask = campoInput.value; 

   array.push(mioTask); 

   campoInput.value = ""; 
   containerDiv.innerHTML = ""; 

   loopInArray(array)
   

}

function loopInArray(array) {

   for (let i =0; i<array.length; i++) {
      let singoloTask = String(array[i]); 

      const sottoDiv = document.createElement("div"); 
      sottoDiv.classList.add("flex")

      
      const paragrafetto = document.createElement("p"); 

      const bottoncino = document.createElement("button"); 
      bottoncino.innerHTML = "Rimuovi Task"

      paragrafetto.innerHTML = singoloTask; 

      sottoDiv.appendChild(paragrafetto); 
      sottoDiv.appendChild(bottoncino); 

      containerDiv.appendChild(sottoDiv)

      bottoncino.addEventListener("click" , () => {
         removeItem( sottoDiv , paragrafetto , bottoncino , singoloTask , array)
      })

      paragrafetto.addEventListener("click" , () => {
         barrato(paragrafetto)
      })

   }

   console.log(array)
}

function removeItem( sottoDiv , paragrafetto , bottoncino , singoloTask , array) {
   sottoDiv.removeChild(paragrafetto)
   sottoDiv.removeChild(bottoncino)
   array.splice(singoloTask); //  <---- non si elimina cosi sta roba!! cambia!  
}


function barrato(paragrafetto) {
   paragrafetto.classList.toggle("barrato")
}