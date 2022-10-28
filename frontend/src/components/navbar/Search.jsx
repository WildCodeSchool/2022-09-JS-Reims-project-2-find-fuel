function Search() {
  return (
    <form className="bg-gray-100 space-y-10 flex justify-center items-center">
      <div className="flex items-center p-1 space-x-6 bg-[#3589a7] ">
        <div className="flex bg-gray-100 p-4 px-0 w-30 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-1 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none w-20"
            type="text"
            placeholder="Rechercher"
          />
        </div>
        <div className="flex py-3 px-2 rounded-lg text-white font-semibold cursor-pointer">
          <h6>Filtre</h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-up-circle"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
            />{" "}
          </svg>
        </div>
        <button
          type="button"
          className="bg-[#24242a] py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
        >
          <h6>Chercher</h6>
        </button>
      </div>
    </form>
  );
}
export default Search;
