import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function EditUser() {
    const navigate = useNavigate();
    const location = useLocation();
    const [age, setAge] = useState(location.state.age)
    const [mobnum, setMobum] = useState(location.state.mobnum)
    const [error, seterror] = useState(false)
    const name=location.state.username
    const [user, setUserData] = useState(name);
    console.log(user);
    const handleEdit = async () => {
        const formData = new FormData()
        formData.append("age", age)
        formData.append("mobnum", mobnum)

        const resp = await fetch(`http://localhost:5000/edituser?username=${user}`, {
            method: 'PATCH',
            body: new URLSearchParams(formData).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        const data = await resp.json()
        console.log(data);
        if (data) {
            navigate("/GetAllusers")
        }else{
            navigate("/EditUser")
        }
    }
    return (
        <>
            
            <div className='body1'>
                <div className='container'>
                    <h1>You Are Updating UserName: {user}</h1>
                    <label htmlFor="age">Age</label>
                    <input type="text" name="" id="age" onChange={(e) => setAge(e.target.value)} value={age} />
                    <label htmlFor="mobnum">MobNum</label>
                    <input type="text" name="" id="mobnum" onChange={(e) => setMobum(e.target.value)} value={mobnum} />
                    <button className='regbtn' onClick={handleEdit}>Update</button>
                    {
                        error ? <div style={{ color: "red", marginTop: 10 }}>"Pls Provide Valid Details"</div> : null
                    }
            </div>
            </div>
        </>
    )
}

export default EditUser