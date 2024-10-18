const express = require("express");
const app = express();
let port=8080;

app.listen(port,()=>{
    console.log("app is listion on the port");
});



app.get("/",(req,res)=>{
    res.send("server is working");
})


// index users

app.get("/users",(req,res)=>{
    res.send("GET for users");
});

// Show users

app.get("/users/:id",(req,res)=>{
    res.send("GET for show users");
})

///Post route

app.post("/users",(req,res)=>{
    res.send("POST for users");
});

//Delete route

app.delete("/users",(req,res)=>{
    res.send("DELETE for users");
});