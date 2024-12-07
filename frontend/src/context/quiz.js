import { useState, createContext } from "react";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
    const questions = [
        "do u know react?",
        "how is lara doing?"
    ];

    const [responses, setResponses] = useState(questions.map(() => ""));

    const updateResponse = (index, value) => {
        setResponses((prevResponses) => {
            const updatedResponses = [...prevResponses];
            updatedResponses[index] = value;
            return updatedResponses;
        });
    };

    return (
        <QuestionContext.Provider value={{ questions, responses, updateResponse }}>
            {children}
        </QuestionContext.Provider>
    );
};


export { QuestionContext, QuestionProvider };
