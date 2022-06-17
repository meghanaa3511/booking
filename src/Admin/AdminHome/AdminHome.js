import { async } from "@firebase/util";
import React, { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onValue, push,ref, set } from "firebase/database";
import { firebaseDatabase } from "../../backend/firebase";
import '../AdminHome/AdminHome.css';

const AdminHome = () => {
    const [flightList,  setFlightList] = useState([]);
   const nav = useNavigate();
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
                        nav("/adminhome");
                    }
                })
            }
            fetchData()
        }, []);
   
        return (
            <div className="app">
                                <div><Link to ='/AddFlight' >Add Flight</Link></div>
            <div>
                <h1> List of Flights</h1>
                <div>
                    {
                        flightList.map((item) => {
                            return (
                                
                                <div className="grid-content">
                                    <p>Airlines name:{item.airline}</p>
                                    <p>Date{item.date}</p>
                                    <p>Departure time:{item.depttime}</p>
                                    <p>Arrival time:{item.arrivetime}</p>
                                    <p>Boarding point:{item.boardpt}</p>
                                    <p>Destination:{item.dest}</p>
                                    <p>Cost{item.cost}</p>
                                </div>
                            
                            )
                        })
                    }
                </div>
            </div>
            </div>
        )
}
export default AdminHome;