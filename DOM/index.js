/*let element = document.getElementById("Hello");
console.log(element);

let elements = document.getElementsByClassName('item');
console.log(elements);


for(let  i = 0; i< elements.length ; i++){
    if ( i % 2 !== 0){
        console.log(elements[i].style.color = 'green');
    }
    
}

let products = document.querySelector ('.item');
console.log(products);

let products2 = document.querySelectorAll('.item');
console.log(products2);

let products3 = document.getElementsByTagName('span');
console.log(products3);

let products4 = document.getElementsByTagName('div');
console.log(products4);
*/

// Evenements: 

// 1- click:

let element = document.getElementById("Hello");
let button = document.getElementById('button');
element.onclick = function (){
    this.innerText = "Changement_de_text";
}

button.onclick = function(){
    element.style.backgroundColor = "green";
}

// devoir , creer des 


