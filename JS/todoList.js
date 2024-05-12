let todo=[];

let req = prompt("please enter your request");


while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }


    if(req=="list"){
        console.log("______________");
        for(let i = 0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("_______________");
    }else if(req=="add"){
         let task = prompt("Please enter the task you wanna add ");
         todo.push(task);
         console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("Please enter the task index to delete");
        todo.splice(idx,1);
        console.log("task deleted");

    } else{
        console.log("wrong request");
    }

     req= prompt("please enter your request");

}

console.log(req);