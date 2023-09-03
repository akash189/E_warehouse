import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setuser] = useState({});

  let onChangeHandler = (e) => {
    setuser({ ...user, [e.target.id]: e.target.value });
  };

  localStorage.setItem("admin", false);
  const navigate = useNavigate();

  let login = () => {
    axios
      .post("http://localhost:8080/warehouse/login", user)
      .then((responce) => {
        console.log(responce.status);
        if (responce.status == 200) {
          navigate("/AdminDashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container col-12 d-flex justify-content-center">
        {/* From Start */}
        <div className="col-4"></div>
        <div className="form col-4 my-5 border p-4">
          <h4 className="text-center m-2">Login</h4>
          <hr className="my-3" />
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                required
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter Your Email"
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                required
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
                onChange={onChangeHandler}
              />
            </div>
            {user.email === "admin@gmail.com" && user.password === "admin" && (
              <button
                type="button"
                onClick={login}
                className="btn btn-success m-3"
              >
                Admin Login
              </button>
            )}
            <button
              type="submit"
              onClick={() => {
                axios
                  .post("http://localhost:8080/warehouse/login", user)
                  .then((responce) => {
                    console.log(responce.status);
                    if (responce.status == 200) {
                      navigate("/Home");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });

              }}
              className="btn btn-success m-3"
            >
              Login
            </button>
          </form>
        </div>
        <div className="col-4"></div>

        {/* From End */}
      </div>
    </>
  );
}

export default Login;
