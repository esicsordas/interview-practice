import { useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';


export function ApiProvider({ children }) {
    const [ids, setIds] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState();
    const serverUrl = import.meta.env.VITE_SERVER_URL;

    const markPreviousQuestions = (id) => {
        if(!ids.includes(id)){
            setIds(prev => [...prev, id]);
        };
    };

    const pickRandomQuestion = async () => {
        try {
            const res = await axios.post(serverUrl +"/randomquestion", {
                ids: ids
            });
            markPreviousQuestions(res.data._id);
            setCurrentQuestion(res.data);
        } catch(e){
            console.error(e)
        };
    };

    return (
        <AppContext.Provider value={{ids, currentQuestion, pickRandomQuestion}}>
            {children}
        </AppContext.Provider>
    )
}