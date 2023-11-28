
console.log ("Hello from external JavaScript")

alert("Welcome to my website");

/*let userResponse = prompt("What is your favorite color")
console.log(`user input was ${userResponse}`)

// These two lines are the same
//alert(`Great! ` + userResponse + " is my favorite color too");
//

let messageColor = `Great, ${userResponse} is my favorite color as well`
alert(messageColor)
*/

/* let littleMermaidRentalDays = prompt(`days rented`);
let brotherBearRentalDays = prompt(`days rented`)
let herculesRentalDays = prompt(`days rented`)
let costForEachMovie = 3
let totalCostOfMovies = (littleMermaidRentalDays * costForEachMovie) + (brotherBearRentalDays * costForEachMovie) + (herculesRentalDays * costForEachMovie);
//totalCostOfMovies;
alert(`total amount paid $${totalCostOfMovies.toFixed(2)}`)
*/

let googleHoursWorked = Number(prompt(`how many hours worked`));
let facebookHoursWorked = Number(prompt(`how many hours worked`));
let amazonHoursWorked = Number(prompt(`how many hours worked`));
let googleRate = 400
let facebookRate = 350
let amazonRate = 380
let totalAmountPaid = (googleHoursWorked * googleRate) + (facebookHoursWorked * facebookRate) + (amazonHoursWorked * amazonRate);
totalAmountPaid;
alert(`total amount made is $${totalAmountPaid}`)



