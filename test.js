let userGuess = prompt("Guess a number between 1 and 10.");
let guesses = 0;
let ans = Math.floor(Math.random() * (11 - 1) + 1);
function guessNumber(num){
    while (num !== ans){
        if (num < ans){
            num = ("Guess higher.");
            console.log(ans)
            guesses ++;
        }
        else {
            num = prompt("Try a lower number.");
            guesses ++;
            console.log(ans)
        }
    }
    return alert("Congratulations!!! You got it right with only ${guesses} tries!!!!");
}

guessNumber(userGuess);