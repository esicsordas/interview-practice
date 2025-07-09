import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

const CategoryInput = () => {
  const [search, setSearch] = useState('');
  const [categorySuggestions, setCategorySuggestions] = useState([]);
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const { setCurrentCategoryQuestions} = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (search.length < 3) {
      setCategorySuggestions([]);
      return;
    }

    const fetchCategorySuggestions = async () => {
      const { data } = await axios.get(
        serverUrl + `/categories?search=${encodeURIComponent(search)}`
      );
      setCategorySuggestions(data);
    };

    fetchCategorySuggestions();
  }, [search]);

  const handleCategorySelect = async (category) => {
    const { data } = await axios.get(serverUrl + `/category?category=${category}`);
    setCurrentCategoryQuestions(data);
    navigate('/category')
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Category..."
        className="bg-white w-full md:w-1/2 border border-gray-300 text-gray-700 text-sm placeholder-gray-400 rounded-md px-3 py-2
                transition duration-150 ease-in-out focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
                hover:border-gray-400 shadow-sm focus:shadow cursor-text w-1/2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onBlur={() => setSearch('')}
      />

      <ul className="absolute m-auto top-8.5 left-0 right-0 bg-white rounded shadow mt-1 w-full md:w-1/2 max-h-60 overflow-y-auto">
        {categorySuggestions.map((cat) => (
          <li
            key={cat}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onMouseDown={() => handleCategorySelect(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryInput;
