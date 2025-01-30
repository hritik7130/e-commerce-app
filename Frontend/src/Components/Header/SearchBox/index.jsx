import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="headerSearch ml-3 mr-3 mb-5">
      <input type="text" placeholder="Search for products..." className="border p-2 rounded-md" />
      <button className="bg-blue-500 text-white p-2 rounded-md ml-2">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBox;
