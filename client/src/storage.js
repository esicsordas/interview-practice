export const storage = {
    initFaveQuestions: () => {
        if( !localStorage.getItem("faveQuestions")) {
            localStorage.setItem("faveQuestions",JSON.stringify([]));
        };
    },
    getAll: () => JSON.parse(localStorage.getItem("faveQuestions")),
    saveAll: (questions) => localStorage.setItem("faveQuestions", JSON.stringify(questions)),
    isQuestionInFaves: (question) => {
        const questions = JSON.parse(localStorage.getItem("faveQuestions"));
        return questions && questions.some(q => q._id === question._id);
    },
};