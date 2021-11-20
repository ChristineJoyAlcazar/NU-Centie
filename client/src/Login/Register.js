import logo from "../assets/NU-Logo-home.png";
import { useForm } from "react-hook-form";
import "../stylesLogin/Register.css";
import axios from "axios";
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLogin = async (data) => {
    console.log(data.firstName);
    console.log(data.lastName);
    console.log(data.contactNumber);
    console.log(data.address);
    console.log(data.email);
    console.log(data.password);
    console.log(data.confirmPass);
    const obj = {
      fname: data.firstName,
      lname: data.lastName,
      email: data.email,
      contactNumber: data.contactNumber,
      address: data.address,
      password: data.password,
      role: "User",
    };
    axios
      .post("http://localhost:3003/register", obj)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <img src={logo} alt="" />
        <h1>NU Innovation Tech-Hub</h1>
        <p>Center for Innovation &amp; Entrepreneurship</p>

        <form onSubmit={handleSubmit(submitLogin)}>
          <label htmlFor="first-name" className="form-label-margin">
            First Name
          </label>

          <input
            type="text"
            className="form-control"
            id="first-name"
            autoFocus
            {...register("firstName", { required: true, maxLength: 1000000 })}
          />

          <label htmlFor="last-name" className="form-label-margin">
            Last Name
          </label>

          <input
            type="text"
            className="form-control"
            id="last-name"
            autoFocus
            {...register("lastName", { required: true, maxLength: 1000000 })}
          />

          <label htmlFor="email-address" className="form-label-margin">
            Email Address
          </label>

          <input
            type="email"
            className="form-control"
            id="email-address"
            autoFocus
            {...register("email", { required: true, maxLength: 1000000 })}
          />

          <label htmlFor="contact-number" className="form-label-margin">
            Contact Number
          </label>

          <input
            type="number"
            className="form-control"
            id="contact-number"
            autoFocus
            {...register("contactNumber", {
              required: true,
              maxLength: 1000000,
            })}
          />

          <label htmlFor="address" className="form-label-margin">
            Address
          </label>

          <input
            type="text"
            className="form-control"
            id="address"
            autoFocus
            {...register("address", { required: true, maxLength: 1000000 })}
          />

          <label htmlFor="password" className="form-label-margin">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: true, maxLength: 1000000 })}
          />

          <label htmlFor="password" className="form-label-margin">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("confirmPass", { required: true, maxLength: 1000000 })}
          />

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          {/* <input className="btn btn-primary" type="submit" /> */}
        </form>
      </div>
      <div className="signup-form">
        <p>
          No account yet? <a href="#!"> Create an account.</a>
        </p>
      </div>
      <small>© 2021. All rights reserved</small>
    </div>
  );
}
