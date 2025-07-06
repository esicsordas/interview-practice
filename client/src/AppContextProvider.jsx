import { useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';
import { storage } from './storage';


export function ApiProvider({ children }) {
    const [questionHistory, setQuestionHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [remainingQuestions, setRemainingQuestions] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [favQuestions, setFavQuestions] = useState(() =>{
        storage.initFaveQuestions();
        return storage.getAll();
    });
    const serverUrl = import.meta.env.VITE_SERVER_URL;

    useEffect(() => {
        if( favQuestions !== undefined) {
            storage.saveAll(favQuestions)
        }
    }, [favQuestions]);

    const pickRandomQuestion = async () => {
        if (isLoading) return;
        try {
            setIsLoading(true);
            const ids = questionHistory.map(question => question._id);
            const res = await axios.post(serverUrl +"/randomquestion", {
                ids: ids
            });
            setCurrentQuestion(res.data.question);
            setRemainingQuestions(res.data.remaining);
            setQuestionHistory(prev => {
                const newHistory = [...prev, res.data.question];
                setCurrentIndex(newHistory.length - 1);
                return newHistory;
            });
        } catch(e){
            console.error(e)
        } finally {
            setIsLoading(false);
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

    const addToFaves = (question) => {
        setFavQuestions((prev) => [...prev, question])
    };

    const removeFromFaves = (question) => {
        setFavQuestions((prev) => prev.filter(q => q._id !== question._id));
    }

    return (
        <AppContext.Provider value={{
            questionHistory,
            currentIndex,
            currentQuestion,
            remainingQuestions,
            isLoading,
            favQuestions,
            pickRandomQuestion,
            getPreviousQuestion,
            getNextQuestion,
            addToFaves,
            removeFromFaves}}>
            {children}
        </AppContext.Provider>
    )
}