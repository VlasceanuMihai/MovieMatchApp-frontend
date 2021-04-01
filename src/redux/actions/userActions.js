export const SET_PROFILE = "SET_PROFILE";
export const LOGOUT_RESET = "LOGOUT_RESET";

// Action Creator
export function setProfile(data) {
  return {
    type: SET_PROFILE,
    externalId: data.externalId,
    fullName: data.fullName,
    dateOfBirth: data.dateOfBirth,
    email: data.email,
    mobileNumber: data.mobileNumber,
    status: data.status,
    addressLine: data.addressLine,
    city: data.city,
    country: data.country,
    createdAt: data.createdAt,
    emailVerified: data.emailVerified,
    mobileVerified: data.mobileVerified,
  };
}

export const logoutReset = () => {
  return {
    type: LOGOUT_RESET,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   setProfile,
//   logoutReset,
// };
