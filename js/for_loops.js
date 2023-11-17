console.log('In loops.js');

// Loops Exercise

//  Exercise 1 & 2
// DONE Create File Name for_loops.js
// Done Create function named showMultiplicationTable
// Done Takes in a number
// Done console.log the table showing multiples from 1 to 10

// let showMultiplicationTable = 1;
// let table = ""
// do {
//     let result = 7 * showMultiplicationTable
//     table += `7 * ${showMultiplicationTable} = ${result} \n`; {
// showMultiplicationTable++
//
//     }
//
// }    while(showMultiplicationTable <= 10);
// console.log(table)

 const showMultiplicationTable = (number) => {
     for (let i = 1; i <= 10; i++)
         console.log(`${number} x ${number * i}`)

     }
     showMultiplicationTable(7);

//  Exercise 3

// Use 'for' loop and previous code to generate 10 random numbers
// Numbers should be between 20 and 200
// result should show even or odd in console (console.log)
//
//

     function getNumberBetween2and200(){
         return Math.floor(Math.random() * (181)) + 20;
     }

     function generate10RandomNumbers() {
         //     for (let i = 0; i < 10; i++) {
         //     // const random = getNumberBetween2and200();
         //     // if (randomNumber % 2 === 0) {
         //         // let result + (randomNumber % 2 === 0) ? `even` : `odd`  [same as above do not need else statement]
         //         console.log(`${getNumberBetween2and200()} is even.`)
         //     } else {
         //         console.log(`${getNumberBetween2and200()} is odd.`);
         //     }
         //
         // }

         for (let i = 0; i < 10; i++) {
             const random = getNumberBetween2and200();
             console.log(`${random} is ${random % 2 === 0 ? `even` : `odd`}`);
         }
     }
     generate10RandomNumbers();
// Exercise 4

// Create a for loop function
// returns numbers 1 - 9

// for (let i = 0; i < 10; i++) {
//
//     for (let h = 0; h < i; h++) {
//         console.log(i);
//     }
//     console.log("\n");
//
// }


     for (let i = 0; i < 10; i++) {
         let table = '';

         for (let h = 0; h < i; h++) {
             table += i;
         }

         console.log(table);
     }

//  function logPyramid() {
//      for (let i = 1; i < 10; i++) {
//           let h = h.toString();
//      console.log(h.repeat(i));
//
//  }
//
// }
//
// logPyramid();

// Question 5

// Start the loop at 100, and decrease by 5 in each iteration until reaching 5

function decrementByFive() {
    for (let i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
}

decrementByFive();