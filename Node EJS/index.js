const express = require("express");
const app = express();

const port = 8080;

app.set("view engine" , "ejs");

app.get("/",(req , res) => {
    res.render("home")
})

app.get("/rolldice",(req , res) => {

    let diceVal =  Math.floor(Math.random() * 6)+1 ;
   res.render("rolldice.ejs",{ num: diceVal});
})


app.get("/ig/:username",(req , res ) => {
    

    let { username } = req.params ;

    const instaData = require("./data.json");
    const data = instaData[username]
    // console.log(instaData);
    res.render("instagram.ejs", {data});
    console.log(data);
})
app.listen(port , () =>{
    console.log(`Listening on ${port}`);
});

