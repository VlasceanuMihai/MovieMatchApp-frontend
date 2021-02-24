import React from "react";

export default function validate(values) {
  let errors = {};

  // FirstName validation
  if (!values.firstName.trim()) {
    errors.firstName = "First Name is required!";
  }

  // LastName validation
  if (!values.lastName.trim()) {
    errors.lastName = "LastName is required!";
  }

  // Password validation
  if (!values.password || values.password.length < 6) {
    errors.password = "Password is required!";
  }

  // Mobile Number validation
  if (!values.mobileNumber) {
    errors.mobileNumber = "Mobile Number is required!";
  }

  // Address Line validation
  if (!values.addressLine) {
    errors.addressLine = "Address Line is required!";
  }

  // City validation
  if (!values.city) {
    errors.city = "City is required!";
  }

  // Country validation
  if (!values.country) {
    errors.country = "Country is required!";
  }
  return errors;
}
