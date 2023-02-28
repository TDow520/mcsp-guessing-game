console.log("Hi Tailon");

// alert("This is an alert");

// let favortieColor = prompt("What is you favorite color?");

// console.log(favortieColor);

let 

// Main function to begin the game
function main(){

    //Generate random secret number
    let ans = Math.floor(Math.random() * (11 - 1) + 1);
    // let ans = 7;

    // Get the username
    let userName = prompt("Please type your name:")

    // Have the user input a guess
    let userGuess = prompt("Guess a number between 1 and 10.");

    // Count the number of guesses made starting with the first input
    let guessCount = 1;

    // Create an empty array to hold all guesses made
    let guesses = [];
    guesses.push(Number.parseInt(userGuess));

    // calls the function
    match(userGuess, userName, guessCount, guesses, ans)
}

// function to check if the user number matches the random number
function match(num, name, numberOfGuesses, guessArr, ans){
    
    // loops unitl the user guesses the answer
    while(Number.parseInt(num) !== ans){

        // checks if the number is less than the answer, then suggests to guess higher.
        if (num < ans){
            num = prompt(`Sorry ${name}, guess higher.`);
        }

        // checks if the number is greater than the answer, then suggests to guess lower.
        else {
            num = prompt(`Sorry ${name}, try a lower number.`);
        }

        //bumps up if the user has to guess again
        numberOfGuesses ++;

        // puts the last number guess to the end of the array of guesses
        guessArr.push(num)
        console.log(ans)
        console.log(guessArr)
        
    }

    // calls the function
    playAgain(name, numberOfGuesses, guessArr)
}

// function to see if the user wants to play again
function playAgain(name, numberOfGuesses, guessArr){

    // pops up with an alert to let the user know that they got the right answer.
    alert(`Congratulations!!! ${name} got it right with only ${numberOfGuesses} tries!!!!`);

    // lets the user know all the guesses that they made
    alert(`These are all the guesses you made:\n ${guessArr}`)

    // Assk if they want to play again. 
    let newGame = prompt(`${name} do you want to play again? Type "y" or "n":`)

    //checks if the reply was yes and if so reruns the game. 
    if (newGame.toLowerCase() == "y" || name.toLowerCase() == "yes"){
        main()
    }
}

main();


