import { useState, createContext } from "react";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
    
    const [Answer,setAnswer] = useState("");

    return (
        <QuestionContext.Provider value={{ 
            Answer,setAnswer
        }}>
            {children}
        </QuestionContext.Provider>
    );
};

export { QuestionContext, QuestionProvider };
