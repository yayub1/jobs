import "./App.css";
import Search from "../component/search.jsx";
import Login from "../component/login.jsx";
import Signup from "../component/signup.jsx";
import logo from "../src/assets/logo.png";
import { useState } from "react";
import Body from "../component/body.jsx";
import Home from "../component/home.jsx";

function App() {
  const [inp, setInp] = useState(""); // Initialize state with an empty string
  const [showLogin, setShowLogin] = useState(false);
  const [showsignup, setShowsignup] = useState(false);
  const [getfil, setgetfil] = useState([]);
  const [location, setlocation] = useState("");
  const [level, setlevel] = useState("");
  const [currency, setcurrency] = useState("");

  function getcurrency(e) {
    setcurrency(e.target.value);
  }

  function getlevel(e) {
    setlevel(e.target.value);
  }

  function getlocation(e) {
    setlocation(e.target.value);
  }
  console.log(location);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowsignup(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };
  const handlesignClick = () => {
    setShowsignup(true);
    setShowLogin(false);
  };

  const handleClosesignup = () => {
    setShowsignup(false);
  };
  function gett(e) {
    setInp(e.target.value);
  }

  function fillterfun(e) {
    const inputValue = e.target.value;
    setgetfil((prev) => [...prev, inputValue]);
  }
  function reset() {
    setgetfil("");
    setInp("");
    setlevel("");
    setcurrency("");
    setlocation("");
  }

  console.log(currency);
  return (
    <>
      <nav className="NavBar w-full h-[101.28px] border-2 shadow-2xl border-amber-50 flex justify-around items-center bg-#fff z-1000 max-xs:bg-amber-700 max-sm:bg-amber-500">
        {/* nav logo start */}
        <div className="logo  w-[157px] h-[61.28px] border-1 bg-[#0034D1] rounded-[10px]">
          <img src={logo} alt="" />
        </div>
        {/* nav logo end */}
        {/* nav btn */}
        <div className="max-xs:hidden max-sm:hidden">
          <ul className="flex gap-7 text-[#2F2F2F]  text-[20px] inter max-md:gap-3 max-md:text-[15px]">
            <li className="hover:text-[#0034D1] hover:font-bold hover:decoration-solid hover:underline  ">
              <a href="#">Job search</a>
            </li>
            <li className="hover:text-[#0034D1] hover:font-bold">
              <a href="#">My application</a>
            </li>
            <li className="hover:text-[#0034D1] hover:font-bold">
              <a href="#">Companies</a>
            </li>
            <li className="hover:text-[#0034D1] hover:font-bold">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        {/* nav btn */}
        {/* nav login */}
        <div>
          <ul className="flex gap-8 text-[20px] items-center max-xs:gap-3 max-sm:gap-3 max-md:gap-2">
            <li>
              <button
                className="w-[168px] h-[48px] border-1 border-[#0034D1] rounded-[8px] justify-items-center self-center hover:bg-[#0034D1] hover:text-[#FFFFFF] max-xs:w-[70px] max-sm:w-[100px] max-md:w-[100px]"
                onClick={
                  showLogin == false ? handleLoginClick : handleCloseLogin
                }
              >
                Login
              </button>
            </li>
            <li>
              <button
                className="w-[168px] h-[48px] border-1  border-[#0034D1] rounded-[8px]  justify-items-center self-center hover:bg-[#0034D1] hover:text-[#FFFFFF] max-xs:w-[70px]  max-sm:w-[100px] max-xs:text-[20px] max-md:w-[100px]"
                onClick={
                  showsignup == false ? handlesignClick : handleClosesignup
                }
              >
                sign up
              </button>
            </li>
          </ul>
        </div>
        {/* nav login */}
      </nav>

      {showLogin && <Login onClick={handleCloseLogin} />}
      {showsignup && <Signup onClick={handleClosesignup} />}

      {/* Conditionally render Login */}

      {!showLogin &&
        !showsignup && ( // Only render if BOTH are false
          <>
            <Home />
            <Search inp={inp} setInp={setInp} gett={gett} />
            <Body
              inp={inp}
              setInp={setInp}
              gett={gett}
              fillterfun={fillterfun}
              getfil={getfil}
              setgetfil={setgetfil}
              location={location}
              setlocation={setlocation}
              getlocation={getlocation}
              setlevel={setlevel}
              level={level}
              getlevel={getlevel}
              currency={currency}
              setcurrency={setcurrency}
              getcurrency={getcurrency}
              reset={reset}
            />
          </>
        )}
    </>
  );
}

export default App;

{
  /* <Jobdetail /> */
}
