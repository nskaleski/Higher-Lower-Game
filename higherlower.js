// the ask_for_max_number() function is for the initial prompt that pops up
// it makes sure the user inputs a positve number that is greater than or equal to 0.5

function ask_for_max_number(){

    let highest_number;
    highest_number = prompt("What should the maximum number be?");

    while (isNaN(highest_number) || (highest_number < .5)) {
        if(isNaN(highest_number)){
            alert("that is not a number!")
            highest_number = prompt("What should the maximum number be?");
           }
        if (highest_number < 1){
            alert("please pick a positive number that is greater than or equal to 0.5")
            highest_number = prompt("What should the maximum number be?");
            }
        }
        rounded_highest_number = Math.round(highest_number);
        let numberRange = document.getElementById("number_range");
        numberRange.innerHTML = "Guess a number between 1 and " + rounded_highest_number  
    }
    
    

    ask_for_max_number();


    

let num = Math.floor(Math.random() * rounded_highest_number) + 1;

console.log(num);

// The do_guess() function validates the user's guess
// tells them if their guess was correct or incorrect
// if it is incorrect, a message pops up explaining why

function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");
   
    if (isNaN(guess)){
        message.innerHTML = "That is not a number!";
    }
    else if (guess < 1 || guess > rounded_highest_number){
        message.innerHTML = "That number is not in range, try again."
    }
    
    else if (guess == num) {
        guessedNumbers();
        displayArray();
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        guessedNumbers();
    }
    else {
        message.innerHTML = "No, try a higher number.";
        guessedNumbers();
    }
}



var guesses = [];

    function guessedNumbers() {
        value = document.getElementById('guess').value;
        guesses.push(value);
        console.log(guesses);
    }

    guessedNumbers();






function displayArray(){
    for(i = 0; i < guesses.length; i++){
        if(guesses.length <= 2){
            document.getElementById("message").innerHTML = 'You got it! It took you ' + (guesses.length - 1) + ' try and Your guess was ' + guesses.join('');
        }
        else {
        document.getElementById("message").innerHTML = 'You got it! It took you ' + (guesses.length - 1) + ' tries and Your guesses were ' + guesses.slice(1).join(', ');  
        }
    }
}

