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
  // const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile()
      .then((response) => {
        console.log("Response.data: ", response.data);
        dispatch(setProfile(response.data));
        console.log(profile);
        console.log(loggedInState);
        console.log(profile.email);
        // setProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>Welcome</div>;
};

export default DashboardComponent;
