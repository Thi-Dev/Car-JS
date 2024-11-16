
/* Function */
let chiffres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplication(a, b){
    return a*b;
}

for (let i = 0; i < chiffres.length; i++){
    console.log ("\nTable de Multiplication de : " + chiffres[i]);

    for (let j= 0; j < chiffres.length; j++){
        console.log(chiffres[i] + "x" + chiffres[j] + "=" + multiplication(chiffres[i], chiffres[j]));
    }
    
}


