/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../../../redux/actions/userActions";
import { setWatchlist } from "../../../redux/actions/watchlistActions";
import AuthenticationService from "../../auth/AuthenticationService";

const DashboardComponent = () => {
  const dispatch = useDispatch();
  const { getProfile, getWatchlist } = AuthenticationService();
  const profile = useSelector((state) => state.userProfile);
  const loggedInState = useSelector((state) => state.loggedIn);
  const watchlist = useSelector((state) => state.watchlist);

  useEffect(() => {
    getProfile()
      .then((response) => {
        console.log("Response.data: ", response.data);
        dispatch(setProfile(response.data));
        console.log("LoggedInState: ", loggedInState);
        console.log("Email: ", profile.email);
      })
      .catch((error) => {
        console.log(error);
      });

    getWatchlist()
      .then((response) => {
        console.log("Watchlist - response.data: ", response.data);
        dispatch(setWatchlist(response.data));
        console.log("Watchlist: ", watchlist);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>Welcome, {profile.fullName}</div>;
};

export default DashboardComponent;
