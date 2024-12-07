import { useState, createContext } from "react";
import useFetch from "../hooks/fetch";

const AuthContext = createContext();

const MyProvider = ({ children }) => {
    // login form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // signup form
    const [name,setName] = useState("");
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setregisterPassword] = useState("");

    const handleSignup = (e,type)=>{
        e.preventDefault()
        console.log("working")
        console.log(type)
    }
    
    return (
        <AuthContext.Provider value={{ email, setEmail,
        password,setPassword,
        name,setName,
        registerEmail,setRegisterEmail,
        registerPassword,setregisterPassword,
        handleSignup
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, MyProvider };
