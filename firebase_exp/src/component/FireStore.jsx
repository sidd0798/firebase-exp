import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase' 
function FireStore() {
    let [user, setUser] = useState({})
    useEffect(()=>{
  getDocs(collection(db , 'user')).then((snapShot)=>{
     snapShot.forEach((doc)=>{
        // console.log(doc.id , doc.data())
        console.log(doc.data())
        setUser(doc.data())
     })
  })
    },[])
   return (
    <>
      <h2>FireStore</h2>
      {Object.keys(user).length>0 ? 
      <>
        <div>user is present</div>
        <div>Name: {user.Name}</div>
        <div>Address: {user.delhi}</div>
        <div>Age: {user.age}</div>
      </>
     :
        <div>No Data Present</div>
      }
    </>
  
  )
}

export default FireStore
