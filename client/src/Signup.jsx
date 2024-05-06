import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {console.log(result)
            navigate('/login')
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div id="regForm" className="p-3 rounded w-400">
                <h2 className="regText">Register</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="name">
                                    <strong className="regText">Name</strong>
                                </label>
                                <input
                                    type="text"
                                    className="form-control rounded-2"
                                    autoComplete="off"
                                    name="name"
                                    style={{ backgroundColor: '#E1DAD4' }}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
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
                        Register Now
                    </button>
                </form>
                <hr />
                <p id="signInLink">Already have an account? <Link to="/login" className="">Login</Link></p>
            </div>
        </div>
    );
}

export default Signup;
