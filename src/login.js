import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    
    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();
    const[error, setError] = useState("")
    const onSubmit = (data)=>{
        if(data.email==="example@gmail.com" && data.password ==="1234"){
            localStorage.setItem('authenticated', true)
            alert("Login Successfully")
        navigate("/home")
        }else{
            setError("Invalid login details");
        }
        
    }
    return ( 
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
<label> email</label>
<input type="email" {...register("email", {required:true, maxLength:30})}
/>
{errors.email && <p style={{color:'red'}}>Please check the email</p>}
<label>Password</label>
<input type="password"  {...register("password", {required: true
                        })}/>
<button className="login-button" type="submit" onSubmit={handleSubmit()}>Login</button>
<p style={{textAlign:"center", color:"red", fontSize:"1.3rem"}}>{error}</p>
            </form>
            <p>You don't have an account? <Link to="/register">Register here</Link></p>
        </div>
     );
}
 
export default Login;