// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";


// const app = express();

// const port = 5000;

// app.use(bodyParser.json());
// app.use(cors());

// app.get('/',(req,res)=>res.send("Hello and Welcome to Express"));

// app.listen(port, ()=> 
//   console.log(`Server is listening on : http://localhost:${port}`)
// )

const express = require ("express");
const app = express();

app.listen(3002, ()=>{
   console.log("Hello World");
});