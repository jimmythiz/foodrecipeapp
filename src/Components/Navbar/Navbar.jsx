import { NavLink } from "react-router-dom";
import './navbar.css'
import { useState } from "react";

import { useAuth } from '../../AuthContext';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isUserLoggedIn, username, setIsUserLoggedIn, setUsername } = useAuth();
    const handleLogout = () => {
        setIsUserLoggedIn(false);
        setUsername("");
        localStorage.removeItem("isUserLoggedIn");
        localStorage.removeItem("username");
        setMenuOpen(false);
    };
    

    return (
        <div className="nav-container">
            <div className="nav-logo">
                Perfect Recipe
            </div>
            <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`nav-menu-wrapper ${menuOpen ? "active" : ""}`}>
                <ul className="nav-links"> 
                    <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/recipepage" onClick={() => setMenuOpen(false)}>Recipe</NavLink></li>
                    <li><NavLink to="/addrecipe" onClick={() => setMenuOpen(false)}>Add Recipe</NavLink></li>
                    <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
                </ul>
                {isUserLoggedIn 
                    ? <div className="nav-greeting">
                        <p>Hello, {username}!</p>
                        <button onClick={handleLogout} className="nav-greeting-btn">Logout</button>
                    </div>
                    : <div className="nav-button"> 
                        <button>
                            <NavLink to="/login" className="tologinbtn" onClick={() => setMenuOpen(false)}>Login</NavLink>
                        </button>
                        <button>
                            <NavLink className="tosignupbtn" to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</NavLink>
                        </button>
                     </div>
}

                
            </div>
        </div>
    );
}

export default Navbar;