//Campo Minato
//Creiamo la variabile container dove appenderemo i nostri elementi
let container = document.getElementById("container-grid");

console.log(container);

let myBtn = document.querySelector("#play");

myBtn.addEventListener("click",
function (){
    container.innerHTML= "";
    for(let i=1 ; i<=100; i++){
        
        let nuovoElemento = createBox("div","box");
        
        container.appendChild(nuovoElemento);

        nuovoElemento.append(i);
         nuovoElemento.addEventListener("click",
         function(){
            nuovoElemento.classList.toggle("clicked");
            console.log("Stai cliccando il numero",i);
         }
         )
       
        
        
    
        
    }
} 

)



//Creiamo la funzione che creerà l'elemento che agganceremo al nostro container

function createBox(){
    const divElement = document.createElement("div");
    divElement.classList.add("box");
   


    return divElement;
}