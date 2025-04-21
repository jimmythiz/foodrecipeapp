import './signup.css'
import { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';




const SignUp = () => {
    const [emailinput, setemailinput] = useState("")
        const [passwordinput, setpasswordInput] = useState("")
        const [usernameInput, setusernameInput] = useState("")
        const [firstnameinput,setfirstnameinput] = useState("")
        const [lastNameInput,setlastNameInput] = useState("")
        const [errors, seterrors] = useState([])
        const [submitted, setsubmitted] = useState(false)
        const { setIsUserLoggedIn, setUsername } = useAuth();
        const navigate = useNavigate(); 
        
        const validateForm = () =>{
            const newErrors = [];
    
            if (usernameInput.trim().length === 0){
                newErrors.username = "Username is required"
            }
            if (passwordinput.length < 8){
                newErrors.password = "Password should be more than 8 characters"
            }
            if (!emailinput.includes("@")){
                newErrors.email = "Invalid Email"
            }
            return newErrors
        }
        const handlefirstnameChange = (e)=>{
            setfirstnameinput(e.target.value)
        }
        const handlelastnameChange = (e)=>{
            setlastNameInput(e.target.value)
        }
        const handleEmailChange = (e) => {
            setemailinput(e.target.value)
        }
        const handlePasswordChange = (e) => {
            setpasswordInput(e.target.value)
        }
        const handleUsernameChange = (e) =>{
            setusernameInput(e.target.value)
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            const formErrors = validateForm();
            if (Object.keys(formErrors).length > 0) {
                seterrors(formErrors);
            } else {
                seterrors({});
                setsubmitted(true);
        
            
                setIsUserLoggedIn(true);
                setUsername(usernameInput);
        
                
                localStorage.setItem("isUserLoggedIn", "true");
                localStorage.setItem("username", usernameInput);
                toast.success("You're in!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                });
                
                
                setTimeout(() => {
                    setsubmitted(false);
                    navigate("/"); 
                }, 3000);
            }
        };
        
    
    
        return ( 
            <div className={`login-wrapper ${submitted ? "submitted" : ""}`}>
                <div className="login-image-div">
                    <img src="https://images.unsplash.com/photo-1551467193-55e430c6ce3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpZ24lMjB1cCUyMGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" className="login-img" />
                </div>
                <div className="login-form" >
                    <h1>Sign Up!</h1>
                    <form onSubmit={handleSubmit}>
                        
                            <label htmlFor="first-name">First Name :</label>
                            <input type="text" value={firstnameinput} onChange={handlefirstnameChange} placeholder='First Name' required />

                            <label htmlFor="Last-name">Last Name :</label>
                            <input type="text" value={lastNameInput} onChange={handlelastnameChange} placeholder='Last Name' required />


                            <label htmlFor="e-mail">Email:</label>
                            <input type="email" value={emailinput} onChange={handleEmailChange} className={errors.email ? "input-error" : ""}  placeholder="Enter your email" required/>
                            {errors.email && <p className="error-message">{errors.email}</p>}
    
                            <label htmlFor="username">Preferred Username:</label>
                            <input type="text" value={usernameInput} onChange={handleUsernameChange}  className={errors.username ? "input-error" : ""}  placeholder="Enter your Preferred Username" required />
                            {errors.username && <p className="error-message">{errors.username}</p>}
                            
                            <label htmlFor="password">Password</label>
                            <input type="password" name="" id="" value={passwordinput} onChange={handlePasswordChange}  className={errors.password ? "input-error" : ""} placeholder="Enter your password" required />
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
         );
}
 
export default SignUp;