const express = require("express");

const app = express();
// console.dir(app);

port =  8080; 

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received ");
//     res.send({
//         name : "apple",
//         color : " red ",
//     });
// } )


app.get("/",(req,res) => {
    res.send(" root ");
})

app.get("/apple",(req,res) => {
    res.send("you contacted apple path");
})

app.get("/home",(req,res) => {
    res.send("you contacted home path");
})


app.get("*",(req,res) => {
    res.send("This path does not exist");
})

app.post("/",(req,res) => {
    res.send("You sent a post request");
})