// const userName = prompt('Enter a number')
// if(userName % 2 === 0) {
//     console.log("even")

// } else {
//     console.log("not a number")

// }



//Conditionals

// if / Else Syntax (has to start with "if")
// if(/*conditions goes here, it must boil down to true or false */)












// Example Problems

    //Create a function that accepts a grade (0-100) abd returns
    //the corresponding Letter Grade (A,B,C,D,F)
    //A: 90 - 100
    //B: 80 - 89
    //C: 70 - 79
    //D: 60 - 69
    //F: 0 - 59

    function convertGrade(grade) {
        let letterGrade;
        //     Conditional Statement that set the letter grade
        if(grade >= 90) {
            letterGrade = 'A';
            //
        } else if(grade >= 80) {
            letterGrade = 'B';
        } else if(grade >= 70) {
            letterGrade = 'C';
        } else if(grade >= 60) {
            letterGrade = 'D';
        } else {
            letterGrade = 'F';
        }
        return letterGrade;
    }
console.log(convertGrade(78));