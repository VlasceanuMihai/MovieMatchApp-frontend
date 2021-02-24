import { useState, useEffect } from "react";
import { signUpApi } from "../../apis/Endpoints";

function useForm(validate) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    addressLine: "",
    city: "",
    country: "",
  });
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date(Date().toLocaleString())
  );
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    event.persist();
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate(user);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);

    if (noErrors) {
      signUpApi({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        dateOfBirth: dateOfBirth,
        mobileNumber: user.mobileNumber,
        addressLine: user.addressLine,
        city: user.city,
        country: user.country,
      })
        .then((response) => {
          console.log("registration response:", response);
        })
        .catch((error) => {
          console.log("registration error: ", error);
        });

      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNumber: "",
        addressLine: "",
        city: "",
        country: "",
      });

      setDateOfBirth(new Date(Date().toLocaleString()));

      console.log("Authenticated", user);
    } else {
      console.log("Validation errors: try again!", validationErrors);
    }
  };

  return {
    user,
    dateOfBirth,
    handleChange,
    setDateOfBirth,
    handleSubmit,
    errors,
  };
}

export default useForm;
