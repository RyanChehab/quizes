import { useState, createContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const MyProvider = ({ children }) => {
    const navigate = useNavigate();
    // login form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // signup form
    const [name,setName] = useState("");
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setregisterPassword] = useState("");

    const HandleSubmit = async (e, type) => {
        //  setting up the params
        let body = {};
        let url = '';
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        if (type === 'signup') {
            body = {
                name: name,
                email: registerEmail,
                password: registerPassword,
            };
            url = 'http://localhost:8080/api/users/signup';
        } else if (type === 'login') {
            body = {
                email: email,
                password: password,
            };
            url = 'http://localhost:8080/api/users/login';
        }
        // fetching the api 
        try {
            const response = await axios({
                url,
                method: 'POST',
                data: body,
                ...options,
            });
    
            console.log(response.data);
            
            // Handle response based on type
            if (type === 'signup') {
                console.log("Signup successful!");
                alert("user registered successfully ");
                navigate('/');

            } else if (type === 'login') {
                console.log("Login successful!");
                localStorage.setItem('token', response.data.token);
                navigate('/Sheet');
            }
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    };
    

    return (
        <AuthContext.Provider value={{ email, setEmail,
        password,setPassword,
        name,setName,
        registerEmail,setRegisterEmail,
        registerPassword,setregisterPassword,
        HandleSubmit
        }}>
            {children}
        </AuthContext.Provider>
    );
}
export { AuthContext, MyProvider };
