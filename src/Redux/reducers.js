import { SET_PROFILE, LOGOUT_RESET } from "./actions";

const initialState = {
  userProfile: {},
  loggedIn: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        userProfile: {
          //   ...state.userProfile,
          externalId: action.externalId,
          fullName: action.fullName,
          dateOfBirth: action.dateOfBirth,
          email: action.email,
          mobileNumber: action.mobileNumber,
          status: action.status,
          addressLine: action.addressLine,
          city: action.city,
          country: action.country,
          createdAt: action.createdAt,
          emailVerified: action.emailVerified,
          mobileVerified: action.mobileVerified,
        },
        loggedIn: true,
      };
    case LOGOUT_RESET:
      return initialState;

    default:
      return state;
  }
};

export default rootReducer;
