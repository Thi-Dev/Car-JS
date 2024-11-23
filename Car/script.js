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

        // Select all buttons with the “choose-button” class
        let chooseButtons = document.querySelectorAll(".choose-button");

        // Browse each button with a `for` loop
        for (let i = 0; i < chooseButtons.length; i++) {
            chooseButtons[i].onclick = function() {
        
            // change the button color
             chooseButtons[i].style.backgroundColor = "yellow";
        
            // Find the associated manufacturer
            let carDiv = chooseButtons[i].parentElement;                        // Div parent for the car
            let manufacturer = carDiv.querySelector(".manufacturer");           // finding the manufacturer
        
            // Check if the text has already been modified
            if (!manufacturer.innerHTML.includes("is taken")) {
                    manufacturer.innerHTML = `${manufacturer.innerText} is taken`;
                    manufacturer.style.backgroundColor = "#FF6600";
                }
            };
        }
