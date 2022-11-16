//Campo Minato
    

let myBtn = document.querySelector("#play");

myBtn.addEventListener("click",
function (){
    //Creiamo la variabile container dove appenderemo i nostri elementi
    let container = document.getElementById("container-grid");

    console.log(container);
    
    let difficult = document.getElementById("difficoltà");
if(difficult == "normal"){
    document.getElementById("container-grid").innerHTML="";
    for(let i=1 ; i<=100; i++){
        
        let nuovoElemento = createBox("div","box");
        
        container.appendChild(nuovoElemento);

        nuovoElemento.append(i);
         nuovoElemento.addEventListener("click",
         function(){
            nuovoElemento.classList.add("clicked");
            console.log("Stai cliccando il numero",i);
         }
         )
       
        
        
    
        
    }
}
 if(difficult == "hard"){
   document.getElementById("container-grid").innerHTML="";
    for(let i=1 ; i<=81; i++){
        
        let nuovoElemento = createBox("div","box");
        
        container.appendChild(nuovoElemento);

        nuovoElemento.append(i);
         nuovoElemento.addEventListener("click",
         function(){
            nuovoElemento.classList.add("clicked");
            console.log("Stai cliccando il numero",i);
         }
         )
       
        
        
    
        
    }
     if(difficult == "very-hard"){
        document.getElementById("container-grid").innerHTML="";
        for(let i=1 ; i<=49; i++){
            
            let nuovoElemento = createBox("div","box");
            
            container.appendChild(nuovoElemento);
    
            nuovoElemento.append(i);
             nuovoElemento.addEventListener("click",
             function(){
                nuovoElemento.classList.add("clicked");
                console.log("Stai cliccando il numero",i);
             }
             )
           
            
            
        
            
        }
    }
}

    
} 

)



//Creiamo la funzione che creerà l'elemento che agganceremo al nostro container

function createBox(){
    const divElement = document.createElement("div");
    divElement.classList.add("box");
   


    return divElement;
}