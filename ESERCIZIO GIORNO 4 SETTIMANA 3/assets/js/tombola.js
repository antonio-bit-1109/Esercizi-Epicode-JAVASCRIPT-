// 1. genero tabellone con tutti i numeri 
// 2. funzione che scrive i numeri (push in array)
// 3 funzione associata a bottone che genera numeri random 
// 4. funzione che evidenzia ( classlist.add )
// 5. funzione che genera tabelline da 24 caselle 

// funzion vanno dichiarate e invocate

window.onload = () => {

   generaTabellone();

   creaCartellina(); 

}

const generaTabellone = () => {

   const divTabellone = document.getElementById("Tabellone");

   for (let i=0; i<90; i++) {

      const casella = document.createElement("div")
      casella.classList.add("casella")
      const casellaNumerata = casella.innerHTML = i + 1; 
      

      divTabellone.appendChild(casella); 

      triggerBottone(casellaNumerata , casella)

   }
   
}

function creaCartellina() {
   
   const bottoneCreaCartellina = document.querySelector("#buttCreaCartellina")

   bottoneCreaCartellina.addEventListener("click" , () => {
      generaCartellina()
      
   })
}



const triggerBottone = (casellaNumerata , casella) => {

   const bottoneAvvio = document.querySelector("#bottoneAvvio"); 
   bottoneAvvio.innerHTML = "Fai uscire un numero"
   bottoneAvvio.classList.add("margin")

   bottoneAvvio.addEventListener("click" , () => {
      evidenziaNumero(casellaNumerata , casella)
      
   } )
}

function evidenziaNumero(casellaNumerata , casella ) {
   
   const numeroRandom = Math.floor(Math.random() * 90) + 1;
   console.log(numeroRandom)
   const casellaInput = document.querySelector("#input"); 

   if (numeroRandom === casellaNumerata) {
      casella.classList.add("evidenziata"); 
      casellaInput.value = `${casellaNumerata}`
   }

}

const generaCartellina = () => {

   const containerCaselline = document.querySelector("#containerCartelline")

   const divcaselline = document.createElement("div"); 
   divcaselline.classList.add("margin-modified")

   containerCaselline.appendChild(divcaselline); 
   

   for (i=0; i<26; i++) {

      const casellina = document.createElement("div")
      casellina.classList.add("casella")
      const casellinaNumerata = casellina.innerHTML = i + 1; 

      divcaselline.appendChild(casellina)

      
   }
}



