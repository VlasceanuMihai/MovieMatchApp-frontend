/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../../../redux/actions";
import AuthenticationService from "../../auth/AuthenticationService";

const DashboardComponent = () => {
  const profile = useSelector((state) => state.userProfile);
  const loggedInState = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  const { getProfile } = AuthenticationService();

  useEffect(() => {
    getProfile()
      .then((response) => {
        console.log("Response.data: ", response.data);
        dispatch(setProfile(response.data));
        console.log("LoggedInState: ", loggedInState);
        console.log("Email: ", profile.email);
        console.log("Fullname: ", profile.mobileNumber);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>Welcome, {profile.fullName}</div>;
};

export default DashboardComponent;
