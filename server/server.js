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
// Create express
const express = require ("express");


const app = express();

// Import the mysql module object
const mysql = require('mysql'); 

const cors = require('cors');

app.use(cors());
app.use(express.json());

// Create Database connection
const db = mysql.createConnection({
  user:"root",
  host:"localhost",
  password:"Kelikume11&&",
  database:"user_manager"

})
//  Setup listening port
app.listen(3002, ()=>{
   console.log("Hello World: your server is running on port:3002");
});

// Create Routes for Endpoints

app.post('/make', (req,res)=>{
   console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wages = req.body.wages;

    db.query('INSERT INTO user_tb (Name, Age, Country, Position, Wages) VALUES(?,?,?,?,?)',
    
    [name, age, country,position,wages], (err,result)=>{
        
      if (err){
        console.log(err);
      }else{

        res.send('Values Inserted');
      }

    }
    
    );
});