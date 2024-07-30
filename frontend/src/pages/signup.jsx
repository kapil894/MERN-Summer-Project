import { useState } from "react";

const Signup=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=()=>{
        
    }

    return(
        <div>
            <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={handleSubmit} >Sign Up</button>
        </div>
    )
}
export default Signup;