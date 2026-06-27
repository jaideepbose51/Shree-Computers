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
  <div className="w-full flex flex-col items-center px-4">

    {/* Search */}

    <form
      onSubmit={onSearchHandler}
      className="
      w-full
      max-w-4xl
      bg-white
      rounded-full
      border
      border-gray-200
      shadow-xl
      hover:shadow-2xl
      transition-all
      duration-300
      flex
      items-center
      overflow-hidden
      "
    >

      <div className="pl-6">

        <img
          src={assets.search_icon}
          alt=""
          className="w-5 opacity-50"
        />

      </div>

      <input
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
        placeholder="Search Programming, Web Development, DCA, ADCA..."
        className="
        flex-1
        bg-transparent
        px-4
        py-5
        outline-none
        text-gray-700
        placeholder:text-gray-400
        text-sm
        md:text-base
        "
      />

      <button
        type="submit"
        className="
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        hover:from-blue-700
        hover:to-indigo-700
        text-white
        px-7
        md:px-10
        py-4
        rounded-full
        font-semibold
        shadow-lg
        transition
        m-1
        "
      >
        Search
      </button>

    </form>

    {/* Popular Searches */}

    <div className="flex flex-wrap justify-center gap-3 mt-7">

      {[
        "O Level",
        "ADCA",
        "DCA",
        "CCC",
        "Web Development",
      ].map((course) => (

        <button
          key={course}
          onClick={() =>
            navigate(
              "/course-list/" +
                encodeURIComponent(course)
            )
          }
          className="
          px-5
          py-2.5
          rounded-full
          bg-white
          border
          border-gray-200
          text-gray-600
          hover:border-blue-500
          hover:text-blue-600
          hover:bg-blue-50
          transition-all
          duration-300
          shadow-sm
          hover:shadow-md
          text-sm
          font-medium
          "
        >
          {course}
        </button>

      ))}

    </div>

  </div>
);
};

export default SearchBar;