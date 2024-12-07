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

    const handleSubmit = async (e,type)=>{
        e.preventDefault()
        console.log("working,",registerEmail)
        
        let body = {};

        if (type === 'signup') {
            body = {
                name: name,
                email: registerEmail, 
                password: registerPassword
            };
            const url = 'http://localhost:8080/api/users/signup'
            const options = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
        } else if (type === 'login') {
            body = {
                email: email, 
                password: password
            };
            const url = 'http://localhost:8080/api/users/login'
            const options = {
                headers: {
                    'Content-Type': 'application/json', 
                },
            };
        }

    }
    return (
        <AuthContext.Provider value={{ email, setEmail,
        password,setPassword,
        name,setName,
        registerEmail,setRegisterEmail,
        registerPassword,setregisterPassword,
        handleSubmit
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, MyProvider };
