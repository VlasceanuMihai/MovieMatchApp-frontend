import { useState } from "react";
import { signUpApi } from "../../apis/Endpoints";
import { useHistory } from "react-router-dom";
import validateForm from "../../validations/SignUpFormValidationRules";

function useForm(callback) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    addressLine: "",
    city: "",
    country: "",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
      addressLine: "",
      city: "",
      country: "",
    },
  });
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date(Date().toLocaleString())
  );
  const [error, setError] = useState({});
  const [submitting, setSubmitting] = useState("");

  let history = useHistory();
  // const validEmailRegex = RegExp(
  //   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  // );

  const validate = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  function handleChange(event) {
    event.preventDefault();
    const inputName = event.target.name;
    const inputValue = event.target.value;
    let validationErrors = user.errors;

    switch (inputName) {
      case "firstName":
        validationErrors.firstName =
          inputValue.length < 3 ? "First name is required!" : "";
        user.firstName = event.target.value;
        break;
      case "lastName":
        validationErrors.lastName =
          inputValue.length < 3 ? "First name is required!" : "";
        break;
      case "email":
        validationErrors.email =
          inputValue.length < 3 ? "Email is required!" : "";
        // errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        validationErrors.password =
          inputValue.length < 4 || inputValue.length > 20
            ? "Password must have 4-20 chareacters!"
            : "";
        break;
      case "mobileNumber":
        validationErrors.mobileNumber =
          inputValue.length < 3 ? "Mobile number is required!" : "";
        break;
      case "addressLine":
        validationErrors.addressLine =
          inputValue.length < 3 ? "AddressLine is required!" : "";
        break;
      case "city":
        validationErrors.city =
          inputValue.length < 3 ? "City is required!" : "";
        break;
      case "country":
        validationErrors.country =
          inputValue.length < 3 ? "Country is required!" : "";
        break;
      default:
        break;
    }

    setUser((user) => ({ ...user, [inputName]: inputValue }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(user);
    const noErrors = Object.keys(validationErrors).length === 0;
    setError(validationErrors);

    if (validate(user.errors) && noErrors) {
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

      history.push(`/dashboard/${user.firstName + " " + user.lastName}`);

      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNumber: "",
        addressLine: "",
        city: "",
        country: "",
        errors: {},
      });

      setDateOfBirth(new Date(Date().toLocaleString()));
      console.log("Authenticated", user);
      setSubmitting("");
    } else {
      console.log("Validation errors: try again!", user.errors, error);
      setSubmitting("Complete required fields!");
    }
  };

  return {
    user,
    dateOfBirth,
    handleChange,
    setDateOfBirth,
    handleSubmit,
    submitting,
  };
}

export default useForm;
