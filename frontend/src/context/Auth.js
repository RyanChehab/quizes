import { useState, createContext } from "react";

const AuthContext = createContext();

const MyProvider = ({ children }) => {
    // login form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // signup form
    const [name,setName] = useState("");
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setregisterPassword] = useState("");
    
    return (
        <AuthContext.Provider value={{ email, setEmail,
        password,setPassword,
        name,setName,
        registerEmail,setRegisterEmail,
        registerPassword,setregisterPassword
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, MyProvider };
