import React from 'react'
import { useState } from "react";
import "./Signup.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
          .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            }
            
            })
          .catch(err => console.log(err));
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div id="regForm" className="p-3 rounded w-400">
                <h2 className="regText">Login</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="email">
                                    <strong className="regText">Email</strong>
                                </label>
                                <input
                                    type="email"
                                    className="form-control rounded-2"
                                    autoComplete="off"
                                    name="email"
                                    style={{ backgroundColor: '#E1DAD4' }}
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong className="regText">Password</strong>
                        </label>
                        <input
                            type="password"
                            className="form-control rounded-2"
                            name="password"
                            style={{ backgroundColor: '#E1DAD4' }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-2 text-decoration-none"
                        style={{ backgroundColor: '#E1DAD4', borderColor: '#608E8E', color: '#416D6D' }}>
                        Login
                    </button>
                </form>
                <hr />
                <p id="signInLink">Need an Account? <Link to="/register" className="">Register</Link></p>
            </div>
        </div>
    )

}

export default Login;