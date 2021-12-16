import React from 'react';
import { useState } from 'react';
import "./Auth.css";
// import { useAuth } from '../Context/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cnfPassword, setCnfPassword] = useState();
    // const { signUp } = useAuth();
    const [msg, setMsg] = useState();

    async function formSubmission(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(cnfPassword);
        // signUp(email, password);
        if (password === cnfPassword) {
            setMsg(null);
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user);
            } catch (error) {
                console.log(error.message);
            }
        }
        else {
            setMsg("Check your password");
        }

    }
    return (
        <div className='signup'>
            <div className='signup-cont'>
                <h1>SignUp</h1>
                <form action="/" onSubmit={formSubmission}>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} /><br />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" name="" id="" onChange={(event) => setPassword(event.target.value)} /><br />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" placeholder="Confirm password" name="" id="" onChange={(event) => setCnfPassword(event.target.value)} /><br />
                    <p>{msg}</p>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
