/* Etudes des Function avec des Boucles  */
let chiffres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addition(a,b){
    return a + b;
}

function soustraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    return b !== 0 ? (a / b).toFixed(2) : "∞";        // Retourne l'infini si b est 0
}

function racineCarre(a){
    return Math.sqrt(a).toFixed(2);                  // Racine carrée avec 2 décimales
}

for (let i = 0; i < chiffres.length; i++){
    console.log("\nTable de calculs pour : " + chiffres[i]);

    // Multiplication pour chaque chiffre de 0 à 10
    console.log("\nMultiplication :");
    for (let j = 0; j < chiffres.length; j++){
        console.log(chiffres[i] + " X " + chiffres[j] + " = " + multiplication(chiffres[i], chiffres[j]));
    }

    // Addition pour chaque chiffre de 0 à 10
    console.log("\nAddition :");
    for (let j = 0; j < chiffres.length; j++){
        console.log(chiffres[i] + " + " + chiffres[j] + " = " + addition(chiffres[i], chiffres[j]));
    }

    // Soustraction pour chaque chiffre de 0 à 10
    console.log("\nSoustraction :");
    for (let j = 0; j < chiffres.length; j++){
        console.log(chiffres[i] + " - " + chiffres[j] + " = " + soustraction(chiffres[i], chiffres[j]));
    }

    // Division pour chaque chiffre de 0 à 10
    console.log("\nDivision :");
    for (let j = 0; j < chiffres.length; j++){
        console.log(chiffres[i] + " / " + chiffres[j] + " = " + division(chiffres[i], chiffres[j]));
    }

    // Racine carrée pour chaque chiffre
    console.log("\nRacine Carrée :");
    console.log("√" + chiffres[i] + " = " + racineCarre(chiffres[i]));

    // Séparation entre les tables
    console.log("\n****************************************************\n");
}