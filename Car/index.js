// TagName Selector

let titel = document.getElementsByTagName("li");
for(let i = 0; i < titel.length; i++){
    console.log(titel[i].style.color='red');
}


// ClassName Selector

let manufactures = document.getElementsByClassName("manufacturer");
for(let j = 0; j< manufactures.length; j++){
    console.log(manufactures[j].style.color = "black");
    console.log(manufactures[j].style.backgroundColor = "#C9E6F0");
}


// id selector

let title = document.getElementById("title").innerHTML = "<em>Cars, Manufacturers, and Countries</em>";
console.log(title);

// QuerySelector

let link = document.querySelector("li > a");
console.log(link.style.color = "green");

// ++++++++++++++ EVENTS +++++++++++++++++++++++++

// 1- color on title
let titleEvent = document.getElementById("title");
titleEvent.addEventListener("mouseover", function () {
    titleEvent.style.color = "yellow";
});
titleEvent.addEventListener("mouseout", function(){
    titleEvent.style.color = "";
})

// 2 - Choose the manufacture

        // Sélectionner tous les boutons ayant la classe "choose-button"
        let chooseButtons = document.querySelectorAll(".choose-button");

        // Parcourir chaque bouton avec une boucle `for`
        for (let i = 0; i < chooseButtons.length; i++) {
            chooseButtons[i].onclick = function() {
        
            // Changer la couleur du bouton
             chooseButtons[i].style.backgroundColor = "yellow";
        
            // Trouver le constructeur associé (le texte du fabricant)
            let carDiv = chooseButtons[i].parentElement;                        // Parent div contenant la voiture
            let manufacturer = carDiv.querySelector(".manufacturer");           // Trouver le constructeur
        
            // Vérification si le texte a déjà été modifié
            if (!manufacturer.innerHTML.includes("is taken")) {
                    manufacturer.innerHTML = `${manufacturer.innerText} is taken`;
                    manufacturer.style.backgroundColor = "#FF6600";
                }
            };
        }
