const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});
app.get("/works", (req, res)=>{
    res.sendFile(__dirname + "/views/works.html");
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/views/about.html");
   });

app.get("/photogallery", (req, res)=>{
    res.sendFile(__dirname + "/views/photogallery.html");
});

//siempre al final
app.listen(3000, ()=>{
    console.log("escuchando puerto 3000");
});