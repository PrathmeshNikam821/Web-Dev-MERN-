function hello(){
    console.log("Hello ");
}



// function to dice & always display value of dice 

function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}


// function parameters

function info(name,age){
    console.log(`${name}'s age is ${age}`);
}


// function to concanate
let str=["hi","hello", "bye","!"];


function concat(str){
    let result="";
    for(let i =0 ; i<str.length ; i++){
        result += str[i];
    }

    return result;

}

console.log(concat(str));