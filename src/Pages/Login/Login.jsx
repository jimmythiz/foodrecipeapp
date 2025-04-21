import './login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const Login = () => {
    const [emailinput, setemailinput] = useState("");
    const [passwordinput, setpasswordInput] = useState("");
    const [usernameInput, setusernameInput] = useState("");
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const { setIsUserLoggedIn, setUsername } = useAuth();
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (usernameInput.trim().length === 0) {
            newErrors.username = "Username is required";
        }
        if (passwordinput.length < 8) {
            newErrors.password = "Password should be more than 8 characters";
        }
        if (!emailinput.includes("@")) {
            newErrors.email = "Invalid Email";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            setIsUserLoggedIn(true);
            setUsername(usernameInput);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                navigate('/');
            }, 1500);
            toast.success("You're in!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
        }
    };

    return (
        <div className={`login-wrapper ${submitted ? "submitted" : ""}`}>
            <div className="login-image-div">
                <img 
                    src="https://images.unsplash.com/photo-1619524537696-3309f8843e92?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9naW4lMjBmb29kfGVufDB8fDB8fHww" 
                    alt="login visual" 
                    className="login-img" 
                />
            </div>
            <div className="login-form">
                <h1>Welcome Back</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="e-mail">Email:</label>
                    <input 
                        type="email" 
                        value={emailinput} 
                        onChange={(e) => setemailinput(e.target.value)} 
                        className={errors.email ? "input-error" : ""} 
                        placeholder="Enter your email" 
                        required 
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}

                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        value={usernameInput} 
                        onChange={(e) => setusernameInput(e.target.value)} 
                        className={errors.username ? "input-error" : ""} 
                        placeholder="Enter your Username" 
                        required 
                    />
                    {errors.username && <p className="error-message">{errors.username}</p>}

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        value={passwordinput} 
                        onChange={(e) => setpasswordInput(e.target.value)} 
                        className={errors.password ? "input-error" : ""} 
                        placeholder="Enter your password" 
                        required 
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}

                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
