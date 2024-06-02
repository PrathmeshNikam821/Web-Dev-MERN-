let url ="https://catfact.ninja/fact";

fetch(url).then((response) => {
    console.log(response);
}).catch((err)=> {
    console.log("error : ", err);
})