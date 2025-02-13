import "react";
import google from "../src/assets/google.png";
import apple from "../src/assets/apple.png";
import facebook from "../src/assets/facbook.png";
import linkedin from "../src/assets/linkdin.png";
import or from "../src/assets/or.png";
import logo from "../src/assets/logo.png";
import signupImage from "../src/assets/signup.png";
import PropTypes from "prop-types";

function Signup({ onClick }) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="md:w-1/2 flex justify-center items-center bg-[#F2F2F2] md:block sm:hidden"
        onClick={onClick}
      >
        <img
          src={signupImage}
          alt="Signup"
          className="object-contain w-[80%] h-[80%]  md:object-contain ml-10"
        />{" "}
        {/* Use object-contain/object-cover */}
      </div>

      <div
        className="md:w-1/2 flex justify-center items-center "
        onClick={onClick}
      >
        <div
          className="w-[90%] max-w-[500px] py-12 px-6 md:px-0  h-175"
          onClick={(event) => event.stopPropagation()}
        >
          {" "}
          {/* Increased max-w */}
          <div className="logo w-[140px] h-[50px] bg-[#0034D1] rounded-[10px] mb-6">
            <img
              src={logo}
              alt="Logo"
              className="p-2 w-full h-full object-contain"
            />{" "}
            {/* Added object-contain */}
          </div>
          <h1 className="text-3xl font-semibold text-center md:text-left mb-4">
            Create your account
          </h1>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-[5px] w-full h-10 px-3"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-[5px] w-full h-10 px-3"
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="border rounded-[5px] w-full h-10 px-3"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <img src={or} alt="Or" className="w-auto h-6" />
          </div>
          <div className="mt-6">
            <button className="w-full h-12 bg-[#0034D1] text-white rounded-[8px] hover:bg-[#0028A3]">
              Create account
            </button>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="flex gap-4">
              <a href="#">
                <img src={google} alt="Google" className="w-10 h-10" />{" "}
              </a>
              <a href="#">
                <img src={apple} alt="Apple" className="w-10 h-10" />{" "}
              </a>
              <a href="#">
                <img src={facebook} alt="Facebook" className="w-10 h-10" />{" "}
              </a>
              <a href="#">
                <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />{" "}
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>
              Already have an account?{" "}
              <a href="" className="text-[#0034D1]">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Signup;
