import "react";
import Vector from "../src/assets/Vector.png";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Search({ inp, setInp, gett }) {
  return (
    <>
      <div
        className="search w-[627px] h-[58px] border-1 rounded-[20px] flex justify-around pt-2.5 pr-3  
      pb-2.5 bl-3 relative left-[28%] top-5 shadow-2xl bg-[#FFFFFF] max-xs:w-[95%] max-xs:left-2  max-sm:w-[95%] max-sm:left-2 max-md:left-[12%]"
      >
        <div className="w-[402px] h-[40px] gap-2 flex justify-items-center items-center ">
          <div>
            <input
              value={inp}
              onChange={gett}
              type="search"
              name="search-nav"
              id="search-nav"
              placeholder="job title, Keywords, or Company name"
              className="w-[308px] h-[24px]  border-r-1 max-xs:w-[180px] max-xs:ml-5 max-sm:w-[250px] max-sm:ml-5 max-ss:ml-2 "
            />
          </div>
          <div className="flex w-[80px]">
            <img
              src={Vector}
              alt=""
              className="w-[12px] h-[16px] relative top-1"
            />

            <button className="text-[16px] hover:bg-amber-600">Location</button>
          </div>
        </div>
        <div>
          <button className="w-[114px] h-[38px] border-1  border-[#0034D1] rounded-[8px]  justify-items-center self-center hover:bg-[#0034D1] hover:text-[#FFFFFF] max-xs:w-[70px] max-sm:w-[90px] max-ss:w-[60px]">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
