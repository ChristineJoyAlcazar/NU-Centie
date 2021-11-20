import logo from "../assets/NU-Logo-home.png";
import { useForm } from "react-hook-form";
import "../stylesLogin/Login.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const submitLogin = async (data) => {
    console.log(data.email);
    console.log(data.password);

    const obj = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:3003/login", obj)
      .then((response) => {
        console.log(response.data[0].user_role);
        if (response.data[0].user_role == "User") {
          localStorage.setItem("userID", response.data[0].user_id);

          history.push("/products/innovations");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={logo} alt="" />
        <h1>NU Innovation Tech-Hub</h1>
        <p>Center for Innovation &amp; Entrepreneurship</p>

        <form onSubmit={handleSubmit(submitLogin)}>
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
          <label htmlFor="password" className="form-label-margin">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: true, maxLength: 1000000 })}
          />
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          {/* <input className="btn btn-primary" type="submit" /> */}
        </form>
      </div>
      <div className="signup-form">
        <p>
          No account yet? <a href="/register"> Create an account.</a>
        </p>
      </div>
      <small>© 2021. All rights reserved</small>
    </div>
  );
}
