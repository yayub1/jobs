import "react";
import PropTypes from "prop-types";
import close from "../src/assets/close.png";
import booked from "../src/assets/booked.png";
import unbooked from "../src/assets/unbooked.png";

function SavedJob({ list = [], onBookedToggle = () => {} }) {
  return (
    <div className="w-200 max-w-[300px] h-max  relative left-[-60px] top-[-40px] flex flex-col gap-4 p-4 bg-white rounded-[20px] shadow-2xl max-xs:left-5 max-sm:left-15 max-sm:top-[30px]">
      {" "}
      {/* Responsive container */}
      <h1 className="text-2xl font-semibold text-center mb-4">
        Saved Jobs
      </h1>{" "}
      {/* Responsive title */}
      {list.length > 0 ? (
        list
          .filter((product) => product.isbooked)
          .map((product) => (
            <div
              key={product.id}
              className="w-full bg-white border rounded-[20px] shadow-md p-3 mb-3 flex flex-col" // Responsive card
            >
              <div className="flex justify-end">
                {" "}
                {/* Icons to the right */}
                <button onClick={() => onBookedToggle(product.id)}>
                  <img
                    src={
                      product.isbooked
                        ? close
                        : product.initialIsBooked
                        ? booked
                        : unbooked
                    }
                    alt={
                      product.isbooked
                        ? "Close"
                        : product.initialIsBooked
                        ? "Booked"
                        : "Unbooked"
                    }
                    className="w-5 h-5"
                  />
                </button>
              </div>
              <div className="flex items-center mt-2">
                {" "}
                {/* Image and title */}
                <h2 className="text-xl font-semibold">{product.title}</h2>
              </div>
              <div className="mt-2">
                <p className="text-sm">{product.company}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {" "}
                  {/* Tags */}
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    {product.type}
                  </span>
                </div>
              </div>
            </div>
          ))
      ) : (
        <p className="text-center mt-4">No saved jobs yet.</p>
      )}
    </div>
  );
}

SavedJob.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isbooked: PropTypes.bool.isRequired,
      initialIsBooked: PropTypes.bool.isRequired,
    })
  ),
  onBookedToggle: PropTypes.func,
};

export default SavedJob;
