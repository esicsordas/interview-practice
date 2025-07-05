import { useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';


export function ApiProvider({ children }) {
    const [questionHistory, setQuestionHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [currentQuestion, setCurrentQuestion] = useState();
    const serverUrl = import.meta.env.VITE_SERVER_URL;

    const pickRandomQuestion = async () => {
        try {
            const ids = questionHistory.map(question => question._id);
            const res = await axios.post(serverUrl +"/randomquestion", {
                ids: ids
            });
            setCurrentQuestion(res.data);
            setQuestionHistory(prev => {
                const newHistory = [...prev, res.data];
                setCurrentIndex(newHistory.length - 1);
                return newHistory;
            });
        } catch(e){
            console.error(e)
        };
    };

    const getPreviousQuestion = () => {
        const newIndex = currentIndex - 1;
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
            setCurrentQuestion(questionHistory[newIndex]);
    }
    };

    const getNextQuestion = () => {
        const newIndex = currentIndex + 1;
        if (newIndex < questionHistory.length) {
            setCurrentIndex(newIndex);
            setCurrentQuestion(questionHistory[newIndex]);
        }
    }

    return (
        <AppContext.Provider value={{questionHistory, currentIndex, currentQuestion, pickRandomQuestion, getPreviousQuestion, getNextQuestion}}>
            {children}
        </AppContext.Provider>
    )
}