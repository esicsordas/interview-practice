const MiniQuestionCard = ({question}) => {
    return(
    <div>
        <div className="aspect-square max-w-[250px] 
                        sm:max-w-[400px] md:max-w-[500px] 
                        border border-gray-300 rounded-xl 
                        shadow-lg bg-white p-2 sm:p-4">
            <div className="flex items-center justify-center 
                            text-gray-700 text-base sm:text-lg 
                            font-semibold w-70 h-70 text-center">
                <h3>{question.question}</h3>
            </div>
        </div>
    </div>
    )
};

export default MiniQuestionCard;