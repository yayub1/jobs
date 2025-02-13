import "react";
import loginpage from "../src/assets/loginpage.png";
import logo from "../src/assets/logo.png";
import google from "../src/assets/google.png";
import apple from "../src/assets/apple.png";
import facebook from "../src/assets/facbook.png";
import linkedin from "../src/assets/linkdin.png";
import or from "../src/assets/or.png";
import PropTypes from "prop-types";

function Login({ onClick }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("login sucessfully");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {" "}
      <div
        className="md:w-1/2 bg-[#F2F2F2] relative md:block hidden"
        onClick={onClick}
      >
        {" "}
        <img
          src={loginpage}
          alt="Login Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className="md:w-1/2 flex justify-center items-center"
        onClick={onClick}
      >
        {" "}
        <div
          className="w-[90%] max-w-[466px] py-12 px-6 md:px-0 border"
          onClick={(event) => event.stopPropagation()}
        >
          {" "}
          <div className="logo w-[140px] h-[50px] bg-[#0034D1] rounded-[10px] mb-6">
            {" "}
            <img src={logo} alt="Logo" className="p-2" />{" "}
          </div>
          <h1 className="text-3xl font-semibold text-center md:text-left mb-4">
            Log in to your account
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              {" "}
              <input
                type="email"
                placeholder="Email"
                className="border rounded-[5px] w-full h-10 px-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded-[5px] w-full h-10 px-3"
              />
            </div>
            <div className="mt-6 flex justify-center">
              {" "}
              {/* Centered the "or" image */}
              <img src={or} alt="Or" className="w-auto h-6" />{" "}
            </div>
            <div className="mt-6">
              <button className="w-full h-12 bg-[#0034D1] text-white rounded-[8px] hover:bg-[#0028A3]">
                Login
              </button>
            </div>
          </form>
          <div className="mt-8 flex justify-center">
            {" "}
            <div className="flex gap-4">
              {" "}
              <a href="#">
                <img src={google} alt="Google" className="w-8 h-8" />{" "}
              </a>
              <a href="#">
                <img src={apple} alt="Apple" className="w-8 h-8" />{" "}
              </a>
              <a href="#">
                <img src={facebook} alt="Facebook" className="w-8 h-8" />{" "}
              </a>
              <a href="#">
                <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />{" "}
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            {" "}
            <p>
              Don’t have an account?{" "}
              <a href="" className="text-[#0034D1]">
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Login;
