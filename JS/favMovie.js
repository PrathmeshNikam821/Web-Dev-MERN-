const favMovie = "3 idiots";

let guess = prompt("Guess my favourite movie");

while((guess!=favMovie) && (guess!='quit')){
    guess=prompt("Worng guess. Please try again");
}

if(guess==favMovie){
    console.log("Congrats!");
}else{
    console.log("You quit");
}