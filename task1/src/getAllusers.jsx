import React, { useState } from 'react'
import { useEffect } from 'react';
import Table from './table';
function GetAllusers() {
    const [users, setusers] = useState([])
    useEffect(()=>{
        const resp = fetch("http://localhost:5000/allusers").then((res)=>res.json()).then((data)=>{
            setusers(data)
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    let userArr=users.map((user,index)=>{
        return (
            <Table user={user} key={index}/>
        )
    })
  return (
    <>
    <br />
        <table>          
        <thead>
            <tr>
                <th colSpan={6} style={{textAlign:"center",fontWeight:"1000"}}>All Users</th>
            </tr>
            <tr>
                <th></th>
                <th>UserNames</th>
                <th>Mobile Numbers</th>
                <th>Age</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
                {userArr}
        </tbody>
        </table>
    </>
  )
}

export default GetAllusers