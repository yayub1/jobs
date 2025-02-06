import "react";

import home from "../src/assets/home.png";
import homeman from "../src/assets/home-man.png";
function Home() {
  return (
    <>
      <div className="z-10 border-2">
        <div className="homepic w-full h-max">
          <img src={home} alt="" />

          <img
            src={homeman}
            alt=""
            className="absolute top-30 left-[60%] w-[500px] max-xs:w-[180px] max-xs:left-[54%] max-xs:top-[8%] max-sm:w-[200px] max-sm:left-[58%] max-sm:top-[7%] max-md:w-[300px] max-md:left-[60%] max-md:top-[8%]  max-ss:left-45"
          />
        </div>
      </div>
    </>
  );
}
export default Home;
