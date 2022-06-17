import React, { useEffect, useState } from "react";
import { set,ref, onValue, DataSnapshot } from "firebase/database";
import { firebaseDatabase } from "../../backend/firebase";
import '../AdminView/view.css'


const View = () => {

        const [List,  setList] = useState([]);
   
        useEffect(() => {  
            const fetchData = async () => {
                const Ref = ref(firebaseDatabase  , 'BOOKING_RECORDS' );
                onValue(Ref, (DataSnapshot) => {
                    if (DataSnapshot.exists()) {
                        const tempVal = DataSnapshot.val();
                        console.log(Object.values(tempVal))
   
                        const temp = [];
                        for (const name in DataSnapshot.val()) {
                            const List = DataSnapshot.child(name).val();
                            temp.push(List);
                        }
                        setList(temp);
                    }else{
                        alert("No records found!")
                    }
                })
            }
            fetchData()
        }, []);
   
        return (
            <div className="content">
                <h1> List of bookings</h1>
                <div>
                    {
                        List.map((item) => {
                            return (
                                <div className="grid">
                                    <h3>{item.name}</h3>
                                    <h3>{item.gender}</h3>
                        
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        )
   }
export default View;