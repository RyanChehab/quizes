import React from "react";
import '../../utilities.css';
import './sheet.css';
import Question from "../question";
import { QuestionContext } from '../../context/Quiz';

const Sheet = ()=>{

    return(
        <>
        <div>
            <h1 className="Quiz">Quiz</h1>
            <div className="sheet">
                <Question></Question>
            </div>

        </div>
        </>
    )
}

export default Sheet;