import React, { useState,useEffect } from 'react';
import userIcon from "../images/user.png"
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config"
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import './Header.css'


const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();


  const [{ user }, dispatch] = useStateValue();


  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }

  };

  const logout = () => {
    localStorage.removeItem('user')
  }


  return (
    <div>

    </div>
  )
}

export default Header;