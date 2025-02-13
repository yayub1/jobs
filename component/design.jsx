import "react";
import PropTypes from "prop-types";
import booked from "../src/assets/booked.png";
import share from "../src/assets/share.png";
import unbooked from "../src/assets/unbooked.png";

function Design({ list, onBookedToggle, currentPage, onPageChange }) {
  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handlePrevPage = () => {
    onPageChange(Math.max(1, currentPage - 1));
  };

  function handleClick() {
    alert("hello");
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-8 flex flex-col gap-6 px-4 max-sm:px-2 relative left-[-40px] max-sm:relative max-sm:top-0 max-sm:left-[-10px]">
      {" "}
      {/* Responsive container */}
      {list.map((product) => (
        <div
          key={product.id}
          className="w-150 bg-white border rounded-[20px] shadow-lg p-4 max-sm:p-2 max-sm:w-[100%]"
          onClick={handleClick}
        >
          <div className="flex justify-end mb-2">
            <div className="flex gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBookedToggle(product.id);
                }}
              >
                <img
                  src={product.isbooked ? unbooked : booked}
                  alt={product.isbooked ? "Unbooked" : "Booked"}
                  className="w-6 h-6"
                />
              </button>
              <button>
                <img src={share} alt="Share" className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <img
              src={product.logo}
              alt={product.title}
              className="w-16 h-16 rounded-full mr-4 max-sm:w-12 max-sm:h-12"
            />
            <div>
              <h2 className="text-xl font-semibold max-sm:text-lg">
                {product.title}
              </h2>
              <p className="text-sm max-sm:text-xs">{product.company}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-200 rounded-md text-xs max-sm:text-[0.6rem]">
                {product.type}
              </span>
              <span className="px-2 py-1 bg-gray-200 rounded-md text-xs max-sm:text-[0.6rem]">
                {product.salary + " " + product.currency}
              </span>
              <span className="px-2 py-1 bg-gray-200 rounded-md text-xs max-sm:text-[0.6rem]">
                {product.location}
              </span>
              <span className="px-2 py-1 bg-gray-200 rounded-md text-xs max-sm:text-[0.6rem]">
                {product.experienceLevel}
              </span>
            </div>
            <p className="mt-2 text-sm max-sm:text-xs">{product.description}</p>
          </div>
        </div>
      ))}
      {/* Pagination */}
      <div className="flex items-center justify-center mt-0 relative top-[-30px] h-20">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 mr-2"
        >
          Previous
        </button>
        <div className="flex gap-2">
          {currentPage - 2 > 0 && (
            <button
              onClick={() => onPageChange(currentPage - 2)}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {currentPage - 2}
            </button>
          )}
          {currentPage - 1 > 0 && (
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {currentPage - 1}
            </button>
          )}
          <button
            onClick={() => onPageChange(currentPage)}
            className="px-4 py-2 rounded bg-blue-500 text-white font-bold"
          >
            {currentPage}
          </button>
          {currentPage + 1 <= 10 && (
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {currentPage + 1}
            </button>
          )}
          {currentPage + 2 <= 10 && (
            <button
              onClick={() => onPageChange(currentPage + 2)}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {currentPage + 2}
            </button>
          )}
        </div>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}
Design.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      brif: PropTypes.string.isRequired,
      isbooked: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onBookedToggle: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Design;
