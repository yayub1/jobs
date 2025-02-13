import "react";
import range from "../src/assets/range.png";

// import { useState } from "react";
// setSelectedJobTypes, SelectedJobTypes
function Filter({
  // selectedJobTypes,
  // handleCheckboxChange,
  // setgetfil,
  // getgil,
  // eslint-disable-next-line react/prop-types
  fillterfun,
  // eslint-disable-next-line react/prop-types
  location,
  // setlocation,
  // eslint-disable-next-line react/prop-types
  getlocation,
  // setlevel,
  // eslint-disable-next-line react/prop-types
  getlevel,
  // currency,
  // setcurrency,
  // eslint-disable-next-line react/prop-types
  getcurrency,
  // eslint-disable-next-line react/prop-types
  reset,
}) {
  return (
    <div className="w-full max-w-[300px] h-max absolute left-[100px] top-[80%] flex flex-col gap-6 p-6 bg-white rounded-[20px] shadow-2xl max-sm:relative max-sm:top-10 max-sm:left-50 max-xs:left-[5px] max-xs:w-[95%]">
      {" "}
      {/* Responsive container */}
      <div>
        <h1 className="text-3xl font-semibold text-center mb-4">Filter</h1>{" "}
        {/* Responsive title */}
        <div className="mb-4">
          {" "}
          {/* Date Posted */}
          <p className="text-lg">Date Posted</p>
          <select
            name="date"
            id="date"
            className="border w-full h-10 mt-2 rounded-[10px] text-base"
          >
            <option value="">Last 24 Hours</option>
            <option value="">Last 7 Days</option>
            <option value="">Last 30 Days</option>
          </select>
        </div>
        <div className="mb-4">
          {" "}
          {/* Job Type */}
          <p className="text-lg">Job Type</p>
          <div className="border rounded-[10px] mt-2 p-2">
            {" "}
            {/* Added padding */}
            <form>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="full-time"
                  className="w-5 h-5 mr-2"
                  onChange={fillterfun}
                  value="Full-time"
                />
                <label htmlFor="full-time" className="text-base">
                  Full-time
                </label>
              </div>
              {/* ... other checkboxes (part-time, internship, etc.) - similar structure */}
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="part-time"
                  className="w-5 h-5 mr-2"
                  onChange={fillterfun}
                  value="Part-time"
                />
                <label htmlFor="part-time" className="text-base">
                  Part-time
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="internship"
                  className="w-5 h-5 mr-2"
                  onChange={fillterfun}
                  value="Internship"
                />
                <label htmlFor="internship" className="text-base">
                  Internship
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="contract"
                  className="w-5 h-5 mr-2"
                  onChange={fillterfun}
                  value="Contract"
                />
                <label htmlFor="contract" className="text-base">
                  Contract
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="volunteer"
                  className="w-5 h-5 mr-2"
                  onChange={fillterfun}
                  value="Volunteer"
                />
                <label htmlFor="volunteer" className="text-base">
                  Volunteer
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="mb-4">
          {" "}
          {/* Location */}
          <p className="text-lg">Location</p>
          <input
            type="text"
            placeholder="Enter your location"
            className="border w-full h-10 mt-2 rounded-[10px] text-base p-2"
            onChange={getlocation}
            value={location}
          />
        </div>
        <div className="mb-4">
          {" "}
          {/* Experience Level */}
          <p className="text-lg">Experience Level</p>
          <select
            name="experience"
            id="experience"
            className="border w-full h-10 mt-2 rounded-[10px] text-base"
            onChange={getlevel}
          >
            <option value="Entry Level">Entry Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>
        <div className="mb-4">
          {" "}
          {/* Salary Range */}
          <p className="text-lg">Salary Range</p>
          <div className="flex items-center justify-between">
            {" "}
            {/* Use justify-between */}
            <p>$20</p>
            <img src={range} alt="range" className="w-6 h-6 mx-2" />{" "}
            {/* Adjusted image positioning */}
            <p>$2000</p>
          </div>
          <div className="w-full border rounded-2xl h-2 mt-2">
            {" "}
            {/* Adjusted height and margin */}
            <div className="w-[55%] border rounded-2xl h-2 bg-[#0034D1] ml-10"></div>
          </div>
        </div>
        <div className="mb-4">
          {" "}
          {/* Input Manually */}
          <p className="text-lg text-center">Input Manually</p>{" "}
          {/* Centered label */}
          <div className="flex items-center justify-center gap-4 mt-2">
            {" "}
            {/* Centered inputs */}
            <div className="flex items-center gap-2">
              <label htmlFor="from" className="text-base">
                From
              </label>
              <input
                type="number"
                id="from"
                className="border w-16 h-8 rounded-[5px] text-base"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="to" className="text-base">
                To
              </label>
              <input
                type="number"
                id="to"
                className="border w-16 h-8 rounded-[5px] text-base"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          {" "}
          {/* Currency */}
          <p className="text-lg">Currency</p>
          <select
            name="currency"
            id="currency"
            className="border w-full h-10 mt-2 rounded-[10px] text-base"
            onChange={getcurrency}
          >
            <option value="USD">Dollar 💲</option>
            <option value="Euro">Euro 💶</option>
            <option value="Pound">Pound 💷</option>
            <option value="ETB">ETB </option>
          </select>
        </div>
        <button
          className="w-full h-12 bg-[#0034D1] text-white rounded-[10px] hover:bg-[#0028A3] text-base"
          onClick={reset}
        >
          {" "}
          {/* Improved button styling */}
          Reset all filter
        </button>
      </div>
    </div>
  );
}

export default Filter;
