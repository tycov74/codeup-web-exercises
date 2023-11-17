console.log('Inside of Break and Continue');

const promptUser1to50 = () => {
    do {
    //     prompt the user
        const userInput = prompt(`Enter an odd number between 1 and 50`);
    //      check the user's answer
        if(userInput % 2 !== 0 && userInput >= 1 && userInput < 50) {
        //     user's input is valid
            break;
        //     we can comment out the code above
        //
        }
    } while(true)
}