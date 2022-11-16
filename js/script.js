//Campo Minato
//Creiamo la variabile container dove appenderemo i nostri elementi
let container = document.getElementById("container-grid");

console.log(container);

let myBtn = document.querySelector("#play");

myBtn.addEventListener("click",
function(event){
    let i=1 
    while( i<=100){
        let nuovoElemento = createBox();
        container.appendChild(nuovoElemento);
        nuovoElemento.append(i);
        i++
        
    
        
    }
}
)



//Creiamo la funzione che creerà l'elemento che agganceremo al nostro container

function createBox(){
    const divElement = document.createElement("div");
    divElement.classList.add("box");
   


    return divElement;
}