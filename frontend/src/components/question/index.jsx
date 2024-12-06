import React,{ useContext }  from 'react';
import { QuestionContext } from '../../context/Quiz';
import "./question.css";

const Question = ({ question, index }) => {
    const { responses, updateResponse } = useContext(QuestionContext);

    return (
        <div className='question'>
            <h4>{question}</h4>
            <label>Response: </label>
            <input
                type="text"
                value={responses[index]} // Bind to the current response
                onChange={(e) => updateResponse(index, e.target.value)} // Update the response
            />
            <br /><br />
            <hr />
        </div>
    );
};

export default Question;