import SingleQ from './SingleQ';
import "./qsec.css";
import { useState } from 'react';

const QueSec = () => {
    const [result, setResult] = useState<number>(0);
    const [showR, setShowR] = useState<boolean>(false);
    const showResult = () => {
        setShowR(!showR);
    }

    return (
        <div className="que-sec">
            <SingleQ 
            question = "The human heart has how many chambers?"
            answers = {["2","3","4"]}
            correct = "4"
            qNo = {1}
            key = {1}
            result = {result}
            setResult = {setResult}
            />
            <SingleQ 
            question = "What is the largest animal currently on Earth?"
            answers = {["Orca","Colossal Squid","Giraffe","Blue Whale"]}
            correct = "Blue Whale"
            qNo = {2}
            key= {2}
            result={result}
            setResult={setResult}
            />
            <SingleQ 
            question = "What does the letter &#039;S&#039; stand for in &#039;NASA&#039;?"
            answers = {["Science","Society","Star","Space"]}
            correct = "Space"
            qNo = {3}
            key= {3}
            result={result}
            setResult={setResult}
            />
            <SingleQ 
            question = "How many bones are in the human body?"
            answers = {["203","209","200","206"]}
            correct = "206"
            qNo = {4}
            key= {4}
            result={result}
            setResult={setResult}
            />
            <SingleQ 
            question = "How many planets make up our Solar System?"
            answers = {["7","9","6","8"]}
            correct = "8"
            qNo = {5}
            key= {5}
            result={result}
            setResult={setResult}
            />
            <button onClick={showResult} className="btn">See Result</button>
            {
                showR && 
                <button className="btn">{result}/10</button>
            }
        </div>
    );
};

export default QueSec;