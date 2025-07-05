export const storage = {
    createFaveQuestions: () => localStorage.setItem("faveQuestions",JSON.stringify([])),
    getQuestion: (id) => {
        const questions = JSON.parse(localStorage.getItem("faveQuestions"));
        return questions && questions.includes(id);
        //not sure, this one right now only returns true/false => do I need the id itself?
    },
    setQuestion: (id) => {
        const questions = JSON.parse(localStorage.getItem("faveQuestions"));
        localStorage.setItem("faveQuestions", JSON.stringify([...questions, id]));
    },
    remove: (id) => {
        const questions = JSON.parse(localStorage.getItem("faveQuestions"));
        const index = questions.indexOf(id);
        questions.splice(index, 1)
        localStorage.setItem("faveQuestions", JSON.stringify(questions));
    },
    getAll: () => JSON.parse(localStorage.getItem("faveQuestions")),
};