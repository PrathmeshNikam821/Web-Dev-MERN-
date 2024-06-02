//async functions 

// async function greet(){
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log(result);
// })

// .catch((err)=>{
//     console.log("Promise was rejected with err : ", err);
// })



// // // /  / /  / / /  /Await function

// function getNum(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//             return num;
//         }, 1000);
//     });
// }

// async function demo(){
//    await getNum();
//    await getNum();
//    await getNum();
// }
