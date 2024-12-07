import React,{useContext} from "react";
import '../../utilities.css';
import './sheet.css';
import Question from "../question";
import { QuestionContext } from '../../context/Quiz';

const Sheet = ()=>{

    const { questions } = useContext(QuestionContext);

    return(
        <>
        <div>
            <h1 className="Quiz">Quiz</h1>
            <div className="sheet">
            {questions.map((question, index) => (
                <Question key={index} question={question} index={index} />
            ))}
            </div>

        </div>
        </>
    )
}

export default Sheet;