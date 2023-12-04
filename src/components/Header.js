import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { NETFLIX_LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
   const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });


    //unsubscribe when component unmounts.
    return ()=> unSubscribe();
  }, []);

  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={NETFLIX_LOGO}
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user.photoURL} alt="user-icon"></img>
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
