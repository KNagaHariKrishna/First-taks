import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import Table from './table';
function GetAllusers() {
    const [users, setusers] = useState([])
    const [selectedRowIndex, setSelectedRowIndex] = useState(0);
    const tableRef = useRef(null);

    useEffect(()=>{
        let tok = localStorage.getItem("jwt")
        const resp = fetch("http://localhost:5000/allusers",{
            headers: {
            "Authorization": tok,
            'Content-Type': 'application/x-www-form-urlencoded'
        }}
        ).then((res)=>res.json()).then((data)=>{
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
    useEffect(() => {
        const handleKeyDown = (event) => {
            const table = tableRef.current;
            if (!table) return;
            const rows = table.querySelectorAll('tbody tr');
            if (!rows.length) return;
            let nextIndex = selectedRowIndex;
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    nextIndex = selectedRowIndex === 0 ? rows.length - 1 : selectedRowIndex - 1;
                    break;
                case 'ArrowDown':
          
                event.preventDefault();
                    nextIndex = selectedRowIndex === rows.length - 1 ? 0 : selectedRowIndex + 1;
                    break;
                case "Enter":
                    event.preventDefault()
                    rows[nextIndex].querySelector('button').click()
                    break;
                default:
                    break;
            }
            setSelectedRowIndex(nextIndex);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedRowIndex]);

    useEffect(() => {
        const table = tableRef.current;
        if (!table) return;
        const rows = table.querySelectorAll('tbody tr');
        if (!rows.length) return;
        rows.forEach((row, index) => {
            if (index === selectedRowIndex) {
                row.classList.add('selected');
            } else {
                row.classList.remove('selected');
            }
        });
    }, [selectedRowIndex]);

  return (
    <>
    <br />
          <table ref={tableRef}>          
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