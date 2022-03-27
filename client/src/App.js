import React from 'react';
import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {

   const [name, setName] = useState("");
   const [age, setAge] = useState("0");
   const [country, setCountry] = useState("");
   const [position, setPosition] = useState("");
   const [wages, setWage] = useState(0);

   const [userlist,setUserList] = useState([]);
    

   const addUser = () =>{
      // console.log(name);
      Axios.post('http://localhost:3002/make',{
      name: name,
      age:age,
      country:country,
      position:position,
      wages:wages,


    }).then(()=>{
       console.log("Success");
    });
   
   };
   const getUsers = ()=>{
      Axios.get('http://localhost:3002/users').then(()=>{
         console.log('Success');
      })
   }
  return (
    <div className="App">
      <div className="info">

          <label >Name:</label>
          <input type="text"  onChange={(event)=> {
             setName(event.target.value)}}/>
          <label >Age:</label>
          <input type="number" onChange={(event)=> {
             setAge(event.target.value)}}/>
          <label >Country:</label>
          <input type="text" onChange={(event)=> {
             setCountry(event.target.value)}} />
          <label >Position:</label>
          <input type="text" onChange={(event)=> {
             setPosition(event.target.value)}} />
          <label >Wage (Per Annum):</label>
          <input type="number" onChange={(event)=> {
             setWage(event.target.value)}}/>
          <button onClick={addUser}>Add User</button>
         
      </div>
    
      <div className="users">
         <button>Show Users</button>
      </div>
    </div>
  );
}

export default App;
