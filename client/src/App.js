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
      Axios.get('http://localhost:3002/users').then((response)=>{
         // console.log(response);
         setUserList(response.data);
      })
   }
  return (
    <div className="App">
       <h1>SIMPLE CRUD APP WITH REACT AND NODE</h1>
      <div className="info">

          {/* <label >Name:</label> */}
          <input type="text" placeholder='Name' onChange={(event)=> {
             setName(event.target.value)}}/>
          {/* <label >Age:</label> */}
          <input type="number" placeholder='Age' onChange={(event)=> {
             setAge(event.target.value)}}/>
          {/* <label >Country:</label> */}
          <input type="text" placeholder='Country' onChange={(event)=> {
             setCountry(event.target.value)}} />
          {/* <label >Position:</label> */}
          <input type="text" placeholder='Position' onChange={(event)=> {
             setPosition(event.target.value)}} />
          {/* <label >Wage (Per Annum):</label> */}
          <input type="number" id='wage' placeholder='Wage (per annum)' onChange={(event)=> {
             setWage(event.target.value)}}/>
         
      </div>
      <button onClick={addUser}>Add User</button>
    
      <div className="users">
         <button onClick={getUsers}>Show Users</button>
         {userlist.map((val, key)=>{
            return (<div className='user'>
               <table className='usersTable'>
                  
                  <tr>
                     <td><h3>{val.main_id}</h3> </td>
                     <td><h3>{val.Name}</h3> </td>
                     <td><h3>{val.Age}</h3> </td>
                     <td><h3>{val.Country}</h3> </td>
                     <td><h3>{val.Position}</h3> </td>
                     <td><h3>{val.Wages}</h3> </td>
                  </tr>
               </table>
              
               </div>);
         })}
      </div>
    </div>
  );
}

export default App;
