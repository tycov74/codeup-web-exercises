console.log('Inside loops.js');

//Loops Lesson
/*
while (conditions) will continue to go back through the code

 */

// let counter = 0;
//
// while (counter < 12) {
//     console.log("Inside while loop. Counter is: " + counter);
//     counter++;
// }
//
// console.log("While loop ended. Counter is " + counter);

// let counter = 0;
//
// while (counter < 12) {
//     console.log("------------------------");
//     console.log(`Beginning of while loop code block, counter is currently ${counter}`);
//
//     counter++;
// }
//
// console.log(`End of while loop code block , counter is now ${counter}`);

// let counter = 12;
//
// while (counter < 12) {
//     console.log("------------------------");
//     console.log(`Beginning of while loop code block, counter is currently ${counter}`);
//
//     counter++;
// }
//
// console.log(`End of while loop code block , counter is now ${counter}`);


// Do while loop






// For Loop Syntax

/*
for(let i = 0; i < 10; i++);
 console.log(i)

 */
// Loop Continuation
// make a loop that counts by two from 0 to 100

for(let i = 0; i <= 100; i++) {
    if(i % 2 !== 0) {
        continue; // goes from 2 to 100
        // break; will log only "0" since it breaks the loop
    }
    console.log(i);
}