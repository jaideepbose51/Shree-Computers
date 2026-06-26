import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState(
    data || ""
  );

  const onSearchHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      navigate("/course-list");
      return;
    }

    navigate(
      "/course-list/" +
        encodeURIComponent(input.trim())
    );
  };

  return (
    <div className="w-full flex justify-center px-4">

      <form
        onSubmit={onSearchHandler}
        className="
          w-full
          max-w-3xl
          bg-white/95
          backdrop-blur-xl
          border
          border-gray-200
          rounded-full
          shadow-xl
          hover:shadow-2xl
          transition-all
          duration-300
          flex
          items-center
          overflow-hidden
        "
      >

        {/* Search Icon */}

        <div className="pl-5 flex items-center">

          <img
            src={assets.search_icon}
            alt="search"
            className="w-5 h-5 opacity-60"
          />

        </div>

        {/* Input */}

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          type="text"
          placeholder="Search your desired course..."
          className="
            flex-1
            px-4
            py-4
            bg-transparent
            outline-none
            text-gray-700
            placeholder:text-gray-400
            text-sm
            md:text-base
          "
        />

        {/* Divider */}

        <div className="hidden sm:block h-8 w-px bg-gray-200"></div>

        {/* Button */}

        <button
          type="submit"
          className="
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            hover:from-blue-700
            hover:to-indigo-700
            text-white
            font-semibold
            px-6
            md:px-8
            py-4
            transition-all
            duration-300
            hover:scale-105
            active:scale-95
            rounded-full
            m-1
            shadow-lg
          "
        >
          Search
        </button>

      </form>

    </div>
  );
};

export default SearchBar;