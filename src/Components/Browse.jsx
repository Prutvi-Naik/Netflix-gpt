import Header from "./Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useEffect } from "react";

const Browse = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("dispatched");
        const { email, uid, displayName, photoURL } = user;
        dispatch(addUser({ email, uid, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });

    // Return the unsubscribe function to clean up when component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between">
        <Header /> 
        <div className="w-5 h-5 bg-amber-300"></div>
      </div>
    </div>
  );
};

export default Browse;