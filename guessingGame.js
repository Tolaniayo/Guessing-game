var userGuess;
var compGuess;
var won = false;
compGuess = 4;
var limit;
var guesses = [];


for(limit = 1 ; limit < 6 ; limit++){
    userGuess = window.prompt("enter any number");


if(userGuess == compGuess){
   
    alert("your guess is correct, you won");
    won = true;
    break;
}
else {
    guesses[limit] = userGuess;

    alert("you guessed wrongly, \nyou have guessed :" + guesses.toString() +  "\n no of tries: " + limit  );    

}
}
if (won != true)
{

    alert("you ran out of tries, Game over");
};
 
function isPreviousGuess()
{
for(limit = 0; limit < guesses.length; limit++)  {
    if (guesses[limit] = userGuess)
    {
        
        return true;
    }
}  
return false;
}

