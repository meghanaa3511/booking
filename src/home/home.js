import { async } from "@firebase/util";
import React, { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onValue, push,ref, set } from "firebase/database";
import { Button } from "@mui/material";
import { firebaseAuth, firebaseDatabase } from "../backend/firebase";
import { signOut } from "firebase/auth";
import '../home/home.css';

const Home = () => {
    const [flightList,  setFlightList] = useState([]);

    

   const nav = useNavigate();

   const handlebook=async()=>{
    const recordref=ref(firebaseDatabase,`BOOKING_RECORDS/${flightList.airline}`);
    await set(recordref,flightList);
    alert("Flight Booked")
};
const handlesignout = async ()=>{
    await signOut(firebaseAuth);
    nav("/");
}


        useEffect(() => {  
            const fetchData = async () => {
                const Ref = ref(firebaseDatabase  , `FLIGHT_RECORDS` );
                onValue(Ref, (DataSnapshot) => {
                    if (DataSnapshot.exists()) {
                        const tempVal = DataSnapshot.val();
                        console.log(Object.values(tempVal))
   
                        const temp = [];
                        for (const name in DataSnapshot.val()) {
                            const flightList = DataSnapshot.child(name).val();
                            temp.push(flightList);
                        }
                        setFlightList(temp);          
                    }
                })
            }
            fetchData()
        }, []);
   
        return (
            <div className="content">
                <Button  onClick={handlesignout}>Sign Out</Button>
                <input className="inputs" placeholder='Date' name ='date' type ={'date'} />

                <h1> Book Flights</h1>
                <div className="list">
                    {
                        flightList.map((item) => {
                            return (
                                
                                <div >
                                    <p>Airlines name:{item.airline}</p>
                                    <p>Date{item.date}</p>
                                    <p>Departure time:{item.depttime}</p>
                                    <p>Arrival time:{item.arrivetime}</p>
                                    <p>Boarding point:{item.boardpt}</p>
                                    <p>Destination:{item.dest}</p>
                                    <p>Cost{item.cost}</p>
                                    <Button onClick={handlebook} >Book Flight</Button>
                                    
                                </div>
                            
                            )
                        })
                    }
                </div>
            </div>
        )
}
export default Home;