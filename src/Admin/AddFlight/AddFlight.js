import { ref, set } from "firebase/database";
import React from "react";
import { useState } from "react";
import { firebaseDatabase } from "../../backend/firebase";
import '../AddFlight/AddFlight.css';
function AddFlight() {

    const[flightData,setFlightData] =useState({
        airline:"",
        date:"",
        depttime:"",
        arrivetime:"",
        boardpt:"",
        dest:"",
        cost:""
    })

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFlightData({
            ...flightData,
            [name]:value
        })
    }
    
    //const [value, onChange] = useState('');
    

    const handleUpload=async()=>{
        const recordref=ref(firebaseDatabase,`FLIGHT_RECORDS/${flightData.airline}`);
        await set(recordref,flightData);
        alert("Flight Details Added")
    };

    return(
        <div className ="container">
                <div className="input-container">
            <input className="inputs" placeholder='Airline Name' name ='airline' type={'text'} value={flightData.airline} onChange={handleChange} required='true'/>
            <div onChange={handleChange}>
        <input type="radio" value="IndiGo" name="airline" /> IndiGo
        <input type="radio" value="AirAsia" name="airline" /> AirAsia
        <input type="radio" value="Air India" name="airline" /> Air India
        <input type="radio" value="SpiceJet" name="airline" /> SpiceJet
        <input type="radio" value="Jet Airways" name="airline" /> Jet Airways
      </div>
      
            <input className="inputs" placeholder='Date' name ='date' type ={'date'} value ={flightData.date} onChange={handleChange}/>
            <input className="inputs" placeholder='Departure time' name ='depttime' type={'time'} value={flightData.depttime} onChange={handleChange}/>
            <input className="inputs" placeholder='Arrival Time' name ='arrivetime' type={'time'} value={flightData.arrivetime} onChange={handleChange}/>
            <input className="inputs" placeholder='Borading Point' name = 'boardpt' type={'text'}  value={flightData.boardpt} onChange={handleChange}/>
            <input className="inputs" placeholder='Destination' name ='dest' type={'text'}  value={flightData.dest} onChange={handleChange}/>
            <input className="inputs" placeholder='Cost ' name ='cost'type={'number'} value={flightData.cost} onChange={handleChange}/>

            <button className="button-upload" onClick={handleUpload}>Add Flight</button></div>
        </div>
    )
    
}
export default AddFlight;
