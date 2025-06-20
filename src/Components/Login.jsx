import { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../Utils/Validate";
import {googleCheck} from "../Utils/firebase"

const Login = () => {
  
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const changeSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef();
  const password = useRef();

  const checkUserInfo = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    const massage = validate(email.current.value, password.current.value);
    console.log(massage);
    setErrorMsg(massage);
  };



  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center ">
        <form className="absolute top-[25%]  bg-gray-900/80 w-4/12  text-white py-8 px-6 rounded-lg">
          <p className="text-right capitalize text-red-500 italic">
            for now use google for login!
          </p>
          <h1 className="text-3xl font-bold capitalize">
            {isSignIn ? "Sign in" : "sign up"}
          </h1>
          {!isSignIn && (
            <input
              className="bg-gray-700 w-full mt-6 py-2 px-6 rounded-lg"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="bg-gray-700 w-full mt-6 py-2 px-6 rounded-lg"
            type="text"
            placeholder="Email Address"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="bg-gray-700 w-full mt-6 py-2 px-6 rounded-lg"
          />
          <p className="text-red-700 py-3 px-2 font-bold">{errorMsg}</p>
          <button
            onClick={checkUserInfo}
            className="bg-red-800 w-full mt-6 py-2 px-6 rounded-lg capitalize cursor-pointer"
          >
            {!isSignIn ? "Sign up" : "Sign In"}
          </button>

          <p className=" mt-6 cursor-pointer" onClick={changeSignIn}>
            {isSignIn
              ? "New to Netflix?Sign up now."
              : "Already have account. Sign In Now"}
          </p>
          <div className="py-4">
            <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            id="google-login-btn"
            onClick={googleCheck}
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span>Continue with Google</span>
            </button>
          </div>
        </form>
      </div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_small.jpg"
        alt="background"
      />
    </div>
  );
};

export default Login;
