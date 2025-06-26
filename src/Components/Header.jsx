import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // Get user from Redux store

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Actually sign out from Firebase
      dispatch(removeUser());
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Remove the auth state listener from here - it should be in a parent component
  // like Browse or App to avoid multiple listeners

  return (
    <div className="absolute bg-gradient-to-b from-black w-screen flex justify-between px-10 z-10 ">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      {user && (
        <div className="flex flex-row items-center gap-x-1">
          <img
            className="w-10 h-10 rounded-[50%]"
            src={ "https://th.bing.com/th/id/OIP.afRrKc8H44oyVv5L_iyfSQHaHa?w=80&h=80&c=1&bgcl=aaafc8&r=0&o=6&cb=iavawebpc1&dpr=1.5&pid=ImgRC"}
            alt="userlogo"
          />
          <button
            className="font-bold text-white cursor-pointer"
            onClick={handleSignOut}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;