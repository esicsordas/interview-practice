import QuestionCard from "../Components/QuestionCard";

const CardList = ({questions, routeName}) => {

  return (
    <div
      className={
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mt-20 min-h-[calc(100vh-100px)] p-4"
      }>
      {questions && questions.length ? 
        questions.map((q) => (
          <div key={q._id?.toString()} >
            <QuestionCard  question={q} size={"small"} />
          </div>
        )) : (
          <div className="border border-gray-300 rounded-xl shadow-lg bg-white p-10 text-center text-lg col-span-2 mx-15 lg:col-start-2 lg:col-span-1 lg:mx-0" >
            <p>No {routeName} selected yet. <br />Search for questions or try a random one to get started! 💥</p>
          </div>
        )}
    </div>
  );
};

export default CardList;
