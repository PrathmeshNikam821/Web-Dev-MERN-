// let num =Math.random();
// // /range 1 to 10

// num = num*10;
// num = Math.floor(num);
// num = num+1;

const max = prompt("Enter the max number");

const random = Math.floor(Math.random()*max)+1;
// console.log(random);


let guess = prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("you quit");
        break;

    }

    if(guess==random){
        console.log("You are right congrats! random number was ", random);
        break;
    } else if(guess < random){
        guess = prompt(" Hint : Your guess was too small. Please try again");
    }else{
        guess = prompt("Hint : Your guess was too large . Please try again");
    }
    
    
    
    
    
    // else{
    //     guess = prompt("your guess was wrong . Please try again");
    // }
}