import { useState } from "react";
import Header from "./Header";

const Login  =()=>{

    const [isSignIn,setIsSignIn] = useState(true)
    const changeSignIn = () =>{
        setIsSignIn(!isSignIn)
        console.log(isSignIn)
    }
    return(
        <div className="">
            <Header/>
            <div className="flex flex-col items-center ">
            <form className="absolute top-[25%]  bg-gray-900/80 w-4/12  text-white py-8 px-6 rounded-lg">
                <h1 className="text-3xl font-bold capitalize">{isSignIn? "Sign in":"sign up"}</h1>
               { !isSignIn&& <input
                className="bg-gray-700 w-full mt-6 py-2 px-6 rounded-lg"
                type="text" placeholder="Full Name" />
               }
                <input
                className="bg-gray-700 w-full mt-6 py-2 px-6 rounded-lg"
                type="text" placeholder="Email Address" />
                <input type="text" placeholder="Password"
                className="bg-gray-700 w-full mt-6 py-2 px-6 rounded-lg"
                />
                <button
                className="bg-red-800 w-full mt-6 py-2 px-6 rounded-lg capitalize cursor-pointer"
                >
                    {!isSignIn? "Sign up":"Sign In"}
                </button>

                <p className=" mt-6 cursor-pointer"
                    onClick={changeSignIn}
                >{isSignIn? "New to Netflix?Sign up now.":"Already have account. Sign In Now"}</p>
              </form>
              </div>
           <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_small.jpg"
            alt="background" />

              
            </div>
    )
}

export default Login;