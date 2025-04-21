import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
        const storedUsername = localStorage.getItem("username");

        if (storedLoggedIn && storedUsername) {
            setIsUserLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("isUserLoggedIn", isUserLoggedIn);
        localStorage.setItem("username", username);
    }, [isUserLoggedIn, username]);

    return (
        <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, username, setUsername }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
