import MiniQuestionCard from "../Components/MiniQuestionCard";

const CardList = ({questions}) => {

  return (
    <div
      className={
        "grid grid-cols-2 sm:grid-cols-3 place-items-center gap-4 mt-20 min-h-[calc(100vh-100px)] p-4"
      }>
      {questions &&
        questions.map((q) => (
          <div key={q._id?.toString()} >
            <MiniQuestionCard  question={q} />
          </div>
        ))}
    </div>
  );
};

export default CardList;
