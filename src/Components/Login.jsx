import { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../Utils/Validate";
import { auth, provider } from "../Utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {


  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const changeSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMsg(null); // Clear error when switching forms
  };

  const checkUserInfo = (e) => {
    e.preventDefault();
    const message = validate(email.current.value, password.current.value);
    setErrorMsg(message);
    if (!message) {
      // Proceed with authentication if validation passes
    }
  };

  const googleCheck = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
    
        // Extract user info from result, not from Redux store
        const  userInfo = result.user
        const { uid, email, displayName, photoURL } = userInfo;
        
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));
        
        navigate("/browse"); // Better than window.location
      })
      .catch((error) => {
        console.error("Authentication error:", error);
        setErrorMsg("Failed to sign in with Google");
      });
  };
  // (user)
  // useEffect(()=>{
  //   localStorage.setItem('user',JSON.stringify(user))
  // },[auth])

  return (
    <div className="relative">
      <Header/>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="flex flex-col items-center">
        <form 
          className="absolute top-[25%] z-20 bg-gray-900/80 w-full md:w-4/12 text-white py-8 px-6 rounded-lg"
          onSubmit={checkUserInfo}
        >
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
            type="email"
            placeholder="Email Address"
            required
          />
          
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="bg-gray-700 w-full mt-6 py-2 px-6 rounded-lg"
            required
          />
          
          {errorMsg && (
            <p className="text-red-500 py-3 px-2 font-bold">{errorMsg}</p>
          )}
          
          <button
            type="submit"
            className="bg-red-800 w-full mt-6 py-2 px-6 rounded-lg capitalize cursor-pointer hover:bg-red-700 transition"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="mt-6 cursor-pointer hover:underline" onClick={changeSignIn}>
            {isSignIn
              ? "New to Netflix? Sign up now."
              : "Already have account? Sign In Now"}
          </p>
          
          <div className="py-4">
            <button
              className="flex items-center justify-center gap-2 bg-white w-full border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
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
        className="w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_small.jpg"
        alt="background"
      />
    </div>
  );
};

export default Login;