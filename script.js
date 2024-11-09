 
 // 1st Exo 

 // EVEN NUMBERS , NOMBRES PAIRS 

let numbers = [1, 5, 25 , 2, 4, 8, 90, 100];
let evenNumber = [];


for (let i = 0; i <= numbers.length; i++){                      //  analyses each element in the table
    if(numbers[i] % 2 === 0){                                    //  Even numbers means : remainder of division is Zero
        evenNumber.push(numbers[i]);                            //  Put even Number in a table.
    } 
}
console.log("Even numbers are : ", evenNumber);                 // display Even Number in a table    


// SUM


let sum = 0;                                                    // initialisation of the sum
for (let i= 0; i < numbers.length; i++){                        // take each numbers in the table
    sum += numbers[i];                                          // adds the number with the previous one to the sum
}

console.log("Sum of the Array  : " , sum);                    // display the sum

// Numbers divisible by 5

let divisibleTable = [];                                       // Create a blank table
for (let i = 0; i < numbers.length; i++){                      // check every numbers in the table
    if (numbers[i] % 5 === 0){                                 // check if the numbers divisible of 5
        divisibleTable.push(numbers[i]);                       // put the number in a Blank table
    }
}
console.log("Divisible numbers of 5 : ", divisibleTable);      // display the Number divisible by 5


// 2nd Exo
let names = ["Andry", "Ravalomanana", "Bema", "Mom", "Rakoto"];   
let tableNames = [];                                            // New table to put the name more than 5 char

for (let i = 0; i < names.length; i++){                         // chek every name in the table
    if (names[i].length >= 5 ) {                                // test every name 
        tableNames.push(names[i]);                              // make the name inside the blank table
    }
}
console.log("Names with more than 5 character : ", tableNames); // display names more than 5 char

// Names with a

let tableWithA = [];                                            // Blank table
for (let i = 0; i < names.length ; i++){                        // chek every name in the table
    if(names[i].toLowerCase().includes("a")){                   // make lowerCase every names and check if there is "a"
        tableNames.push(names[i]);                              // put in the name with "a" in a blank table
    }
}
console.log("Names with character a ", tableNames);             // display Names with the character a

// Replace char "O" by "i"

let tableObyI = [];                                              // Blank table
for (let i = 0; i < names.length; i++){                         // chek every name in the table
    if(names[i].toLowerCase().includes("o")){                   // make lowerCase every names and check if there is "o"
        let replaceName = names[i].replace(/o/g, "i");         // Replace "o" by "i" in the name
         tableObyI.push(replaceName);                          // put it in a table

    }
}

console.log("Names with 'o' replaced by 'i':", tableObyI);     // display a the interface






