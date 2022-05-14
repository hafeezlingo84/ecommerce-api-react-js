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
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-none p-3 mb-5 bg-light">
        <Link to={"/"} className="navbar-brand"> <img src={logo} alt="userprofile" width='150px' /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link"   >Home <span className="sr-only">(current)</span></a>
            </li>


          </ul>
          <form className="form-inline my-2 my-lg-0">

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{ marginRight: "10px" }}>Course Registration Form</button>

            <button type="button" className="btn btn-primary" style={{ marginRight: "10px" }}>New Courses</button>

            {user ?

              <button type="button" className="btn btn-primary" onClick={logout}  style={{ marginRight: "10px" }} >Signout</button>
              :
              <button type="button" className="btn btn-primary" onClick={login} style={{ marginRight: "10px" }}>Login</button>
            }
            <div>

            </div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"    id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={user ? user.photoURL : userIcon} alt="userprofile" width='50px' className="rounded-circle" />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item"   >Signout</a>
                </div>
              </li>
            </ul>
          </form>

          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Course Registration Form</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="selectCity">Select city</label>
                        <select id="selectCity" className="form-control">
                          <option selected>Select city</option>
                          <option value="Hyderabad">Hyderabad</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="selectCourse">Select city</label>
                        <select id="selectCourse" className="form-control">
                          <option selected>Select city</option>
                          <option value="Graphic Designing">Graphic Designing</option>
                          <option value="Web and Mobile Application">Web and Mobile Application</option>
                        </select>
                      </div>

                      <div className="form-group col-md-6">
                        <label for="fullName">Full name</label>
                        <input type="text" className="form-control" id="fullName" placeholder="Full name" />
                      </div>

                      <div className="form-group col-md-6">
                        <label for="fatherName">Father name</label>
                        <input type="text" className="form-control" id="fatherName" placeholder="Father name" />
                      </div>

                      <div className="form-group col-md-6">
                        <label for="Email">Email</label>
                        <input type="email" className="form-control" id="Email" placeholder="Email" />
                      </div>

                      <div className="form-group col-md-6">
                        <label for="Phone">Phone</label>
                        <input type="tel" className="form-control" id="Phone" placeholder="Phone" />
                      </div>

                      <div className="form-group col-md-6">
                        <label for="cnic">CNIC</label>
                        <input type="text" className="form-control" id="CNIC" placeholder="CNIC" />
                      </div>

                      <div className="form-group col-md-6">
                        <label for="fatherCNIC">Father's CNIC (optional)</label>
                        <input type="text" className="form-control" id="fatherCNIC" placeholder="Father's CNIC (optional)" />
                      </div>

                      <div className="form-group col-md-6">
                        <label for="dateOfBirth">Date of birth</label>
                        <input type="date" className="form-control" id="dateOfBirth" placeholder="Date of birth" />
                      </div>

                      <div className="form-group col-md-6">
                        <label for="selectGender">Select Gender</label>
                        <select id="selectGender" className="form-control">
                          <option selected>Select gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                    </div>
                    <div className="form-group">
                      <label for="inputAddress">Address</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group">
                      <label for="lastQualification">Last qualification</label>
                      <select id="lastQualification" className="form-control">
                        <option selected>Last qualification</option>
                        <option value="
Matric">
                          Matric</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Other">Graduate</option>
                        <option value="Other">Masters</option>
                        <option value="Other">PHD</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                  </form>


                </div>
                <div class="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header;