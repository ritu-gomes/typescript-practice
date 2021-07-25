import "./singleq.css";

interface Iprops {
    question: string;
    answers: string[];
    correct: string;
    qNo: number;
    key: number;
    result: number;
    setResult: any
}

const SingleQ = ({question, answers, correct, qNo, result, setResult}: Iprops) => {

    const Click = (ans: string, corr: string): void => {
        if(ans === corr){
            setResult(result + 1);            
        }
    }
    
    return (
        <>
        <div className="single-q">
            <h3>{qNo}. {question}</h3>
            <div className="ans-sec">
                {
                    answers.map((ans: string): any => <p onClick={() => Click(ans, correct)}> ⮞   {ans}</p> )
                }
            </div>
        </div>
        </>
    );
};

export default SingleQ;