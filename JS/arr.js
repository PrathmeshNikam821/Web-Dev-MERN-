//forEach function

let arr = [1,2,3,4,5];

let print = function(el){
    console.log(el);
};

arr.forEach(print);



//Map function

double = arr.map(function(el){
    return el*2;
});
console.log(double);


//filter function

let even = arr.filter((el)=>{
    return el % 2 == 0; // even -> true , odd -> false
});

console.log(even);


//every function


let every = arr.every(function(el){
    return el % 2 == 0 ;
});

console.log(every);


// reduce function

let reduce = arr.reduce((res,el) => (res+el));

console.log(reduce);


