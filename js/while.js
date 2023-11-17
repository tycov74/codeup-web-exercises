console.log('Inside While Loop')

function powerOfTwo() {
    let number = 2
    while(number < 66000) {
        console.log(number);
        number *= 2;
    }
}
powerOfTwo();

console.log('Inside Do While Loop');

function sellSomeCones() {

// generates the amount of cones in our inventory
    let allCones = Math.floor(Math.random() * 50) + 50;


// start of loop
    do {

        // log all cones so I can check is math is right
        console.log(`Welcome to my shop. I have ${allCones} cones to sell`);


        // generate the amount of cones the customer wants to buy
        const customerCones = Math.floor(Math.random() * 5) + 1;

        // check if the amount the customer want is that less than or equal to the amount in my inventory
        if(customerCones <= allCones) {

            // if we have enough cones, sell the cones (subtract) that amount from inventory
            allCones -= customerCones;

            // log that we've sold the cones
            console.log(`${customerCones} cones sold...`);

        } else {

            // if we DON'T have enough cones, CONTINUE to next loop iteration
            console.log(`Cannot sell yo ${customerCones}, I only have ${allCones} :(`);


        }

        // *inside of loop still* if inventory is empty, BREAK out of loop

    } while(allCones > 0);
    console.log('Yay, I sold all the cones');

}

sellSomeCones();
