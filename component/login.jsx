import "react";
import loginpage from "../src/assets/loginpage.png";
import logo from "../src/assets/logo.png";
import google from "../src/assets/google.png"; // Corrected typo: goole -> google
import apple from "../src/assets/apple.png";
import facebook from "../src/assets/facbook.png"; // Corrected typo: facbook -> facebook
import linkedin from "../src/assets/linkdin.png"; // Corrected typo: linkdin -> linkedin
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
      {/* Added h-screen for full-screen height, flex-col for mobile */}
      <div
        className="md:w-1/2 bg-[#F2F2F2] relative md:block hidden"
        onClick={onClick}
      >
        {" "}
        {/* Added hidden class for small screens */}
        <img
          src={loginpage}
          alt="Login Image"
          className="object-cover w-full h-full" // Use object-cover for image scaling
        />
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        {" "}
        {/* Center content vertically and horizontally */}
        <div className="w-[90%] max-w-[466px] py-12 px-6 md:px-0">
          {" "}
          {/* Added max-w and padding, removed fixed height */}
          <div className="logo w-[140px] h-[50px] bg-[#0034D1] rounded-[10px] mb-6">
            {" "}
            {/* Added margin-bottom */}
            <img src={logo} alt="Logo" className="p-2" />{" "}
            {/* Added padding to logo image */}
          </div>
          <h1 className="text-3xl font-semibold text-center md:text-left mb-4">
            Log in to your account
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              {" "}
              {/* Reduced gap */}
              <input
                type="email"
                placeholder="Email" // Corrected typo: Emai -> Email
                className="border rounded-[5px] w-full h-10 px-3" // Added padding to input
              />
              <input
                type="password" // Changed to password input for security
                placeholder="Password" // Corrected typo: Emai -> Password
                className="border rounded-[5px] w-full h-10 px-3" // Added padding to input
              />
            </div>
            <div className="mt-6 flex justify-center">
              {" "}
              {/* Centered the "or" image */}
              <img src={or} alt="Or" className="w-auto h-6" />{" "}
              {/* Added width and height to or image */}
            </div>
            <div className="mt-6">
              <button className="w-full h-12 bg-[#0034D1] text-white rounded-[8px] hover:bg-[#0028A3]">
                Login
              </button>
            </div>
          </form>
          <div className="mt-8 flex justify-center">
            {" "}
            {/* Center social icons */}
            <div className="flex gap-4">
              {" "}
              {/* Added gap between icons */}
              <a href="#">
                <img src={google} alt="Google" className="w-8 h-8" />{" "}
                {/* Set icon size */}
              </a>
              <a href="#">
                <img src={apple} alt="Apple" className="w-8 h-8" />{" "}
                {/* Set icon size */}
              </a>
              <a href="#">
                <img src={facebook} alt="Facebook" className="w-8 h-8" />{" "}
                {/* Set icon size */}
              </a>
              <a href="#">
                <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />{" "}
                {/* Set icon size */}
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            {" "}
            {/* Center text */}
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
