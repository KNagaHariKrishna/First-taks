// import "./Register.css";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// function Register() {
//     const navigate = useNavigate();
//     const [username, setusername] = useState("");
//     const [phone, setphone] = useState("");
//     const [profession, setprofession] = useState("");
//     const [email, setemail] = useState("");
//     const [password, setpassword] = useState("");
//     const [cpass, setcpass] = useState("");
//     const [response, setResponse] = useState([]);
//     const [error, setError] = useState({
//         email: { isValid: true, message: "" },
//         password: { isValid: true, message: "" },
//         cpass: { isValid: true, message: "" },
//     });

//     const HandleSignup = async (event) => {
//         event.preventDefault();
//         setemail("");
//         setpassword("");
//         setcpass("");
//         setusername("");
//         setphone("");
//         setprofession("");

//         const resp = await fetch("http://localhost:5000/api/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify({
//                 username,
//                 email,
//                 password,
//                 phone,
//                 profession,
//                 cpass,
//             }),
//         });
//         console.log(data.data);
//         const data = await resp.json();
//         setResponse(data);
//         if (data.data) {
//             navigate("/");
//         }
//     };

//     const checkErrors = (type) => {
//         switch (type) {
//             case "email":
//                 if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
//                     setError({
//                         ...error,
//                         email: {
//                             isValid: false,
//                             message: "Please enter proper email address",
//                         },
//                     });
//                 } else {
//                     setError({ ...error, email: { isValid: true, message: "" } });
//                 }
//                 break;
//             case "password":
//                 if ((password.length < 6) & (password.length !== 0)) {
//                     setError({
//                         ...error,
//                         password: {
//                             isValid: false,
//                             message: "Password should have minimum length of 6",
//                         },
//                     });
//                 } else {
//                     setError({ ...error, password: { isValid: true, message: "" } });
//                 }
//                 break;
//             case "cpass":
//                 if (password !== cpass) {
//                     setError({
//                         ...error,
//                         cpass: {
//                             isValid: false,
//                             message: "Password and confirm Password doesn't match",
//                         },
//                     });
//                 } else {
//                     setError({ ...error, cpass: { isValid: false, message: "" } });
//                 }
//                 break;
//         }
//         console.log(error.email.message.length);
//     };

//     const isSubmitValid = email.length && password.length && cpass.length;
//     return (
//         <section className="register-form">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-sm-4 text">
//                         <h1>Welcome Page One line text Will be here</h1>
//                         <p>Sign in to continue access pages</p>
//                         <span>Already Have An Account</span>
//                         <Link to="/">
//                             <button>Sign In</button>
//                         </Link>
//                     </div>
//                     <div className="col-sm-8 registerform">
//                         <h2>Register</h2>
//                         <p className="para">Register to continue access pages</p>
//                         <div className="form-regt">
//                             {" "}
//                             <label htmlFor="name">
//                                 <b>Name</b>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter Name"
//                                 className="reg-input"
//                                 name="name"
//                                 id="name"
//                                 required
//                                 onChange={(e) => setusername(e.target.value)}
//                                 value={username}
//                             />
//                         </div>
//                         <div className="form-regt">
//                             {" "}
//                             <label htmlFor="email">
//                                 <b>Email</b>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter Email"
//                                 className="reg-input"
//                                 name="email"
//                                 id="email"
//                                 required
//                                 onChange={(e) => setemail(e.target.value)}
//                                 onBlur={(event) => {
//                                     checkErrors("email");
//                                 }}
//                                 value={email}
//                             />
//                         </div>

//                         <div className="form-regt">
//                             {" "}
//                             <label htmlFor="phone">
//                                 <b>Phone</b>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter Phone"
//                                 name="phone"
//                                 className="reg-input"
//                                 id="phone"
//                                 required
//                                 onChange={(e) => setphone(e.target.value)}
//                                 value={phone}
//                             />
//                         </div>
//                         <div className="form-regt">
//                             {" "}
//                             <label htmlFor="prof">
//                                 <b>Profession</b>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter Profession"
//                                 className="reg-input"
//                                 name="prof"
//                                 id="prof"
//                                 required
//                                 onChange={(e) => setprofession(e.target.value)}
//                                 value={profession}
//                             />
//                         </div>
//                         <div className="form-regt">
//                             {" "}
//                             <label htmlFor="pass">
//                                 <b>Password</b>
//                             </label>
//                             <input
//                                 type="password"
//                                 className="reg-input"
//                                 placeholder="Enter password"
//                                 name="pass"
//                                 id="pass"
//                                 required
//                                 onChange={(e) => setpassword(e.target.value)}
//                                 onBlur={(event) => {
//                                     checkErrors("password");
//                                 }}
//                                 value={password}
//                             />
//                         </div>

//                         <div className="form-regt">
//                             {" "}
//                             <label htmlFor="cpass">
//                                 <b>Confirm Password</b>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Confirm password"
//                                 className="reg-input"
//                                 name="cpass"
//                                 id="cpass"
//                                 required
//                                 onChange={(e) => setcpass(e.target.value)}
//                                 onBlur={(event) => {
//                                     checkErrors("cpass");
//                                 }}
//                                 value={cpass}
//                             />
//                         </div>
//                         <div className="form-regt checkbox">
//                             {" "}
//                             <input type="checkbox" />I agree to Terms & Condition receiving
//                             marketing and promotional materials
//                         </div>
//                         <div className="form-regt regibtn">
//                             {" "}
//                             <button
//                                 type="submit"
//                                 className="regibtn"
//                                 onClick={HandleSignup}
//                                 disabled={
//                                     isSubmitValid === 0 ||
//                                         error.email.message.length !== 0 ||
//                                         error.password.message.length !== 0 ||
//                                         error.cpass.message.length !== 0 ||
//                                         password !== cpass
//                                         ? true
//                                         : false
//                                 }
//                             >
//                                 Register
//                             </button>
//                             <div className="errorContianer">
//                                 <div id="mess">
//                                     {!error.email.isValid ? (
//                                         <div style={{ color: "red" }}>{error.email.message}</div>
//                                     ) : null}
//                                 </div>
//                                 <div id="mess2">
//                                     {" "}
//                                     {!error.password.isValid ? (
//                                         <div style={{ color: "red" }}>{error.password.message}</div>
//                                     ) : null}
//                                 </div>
//                                 <div id="mess1">
//                                     {!error.cpass.isValid ? (
//                                         <div style={{ color: "red" }}>{error.cpass.message}</div>
//                                     ) : null}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Register;

import { useState } from "react";

function CenteredDivWithButton() {
    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };

    return (
        <div>
            <button onClick={toggleDiv}>Show Div</button>
            {showDiv && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "lightgray",
                        padding: "20px",
                        borderRadius: "10px",
                    }}
                >
                    <button onClick={toggleDiv}>Close Div</button>
                </div>
            )}
        </div>
    );
}

export default CenteredDivWithButton;
