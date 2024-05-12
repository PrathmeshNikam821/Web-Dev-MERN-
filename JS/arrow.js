const sum = (a,b) =>{
    console.log(a+b);
}

const cube = (n)=> n*n*n;

// implicit return 


const mul = (a,b) => (
    a * b
);



// Set timeout

console.log("hi there!");


setTimeout(() => {
    console.log(" Apna college ");

},2000);

console.log("Welcome to ");

//  let id = setInterval (()  => {
//     console.log("Hello");
// },2000);
   
// console.log(id);


//this in arrow function

const student ={
    name : " Pratham",
    marks : 92 , 
    prop : this, // global scope

    getName : function(){
        console.log(this);
        return this.name;
    },

    getMarks : () => {
        console.log(this);//parent's scope -> window object
        return this.marks;
    },


    getInfo1: function(){
        setTimeout(() => {
            console.log(this); //student
        },2000);
    },

    getInfo2: function(){
        setTimeout(function (){
            console.log(this);//window

        },2000);
    },


};