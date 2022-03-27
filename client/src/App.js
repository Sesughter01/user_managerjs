
import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {

   const [name, setName] = useState("");
   const [age, setAge] = useState("0");
   const [country, setCountry] = useState("");
   const [position, setPosition] = useState("");
   const [wages, setWage] = useState(0);
    
   const addUser = () =>{
    Axios.post('http://localhost:3002/make',{
      name: name,
      age:age,
      country:country,
      position:position,
      wages:wages,


    })};

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
          <button>Add Employee</button>
      </div>
      
    </div>
  );
}

export default App;
