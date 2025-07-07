import QuestionCard from "../Components/QuestionCard";

const CardList = ({questions}) => {

  return (
    <div
      className={
        "grid grid-cols-2 sm:grid-cols-3 place-items-center gap-4 mt-20 min-h-[calc(100vh-100px)] p-4"
      }>
      {questions &&
        questions.map((q) => (
          <div key={q._id?.toString()} >
            <QuestionCard  question={q} size={"small"} />
          </div>
        ))}
    </div>
  );
};

export default CardList;
