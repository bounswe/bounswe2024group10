import React, { useContext, useState } from "react";
import styles from "./LoginSignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import nookies from "nookies";
import { login, register } from "../services/auth";
import { authContext } from "../context/AuthContext";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { setUser } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login({ userName, password });

      if (response.success) {
        const { token } = response;
        nookies.set(null, "authToken", token, {
          maxAge: 7 * 24 * 60 * 60,
          path: "/",
        });
        nookies.set(null, "userName", userName, {
          maxAge: 7 * 24 * 60 * 60,
          path: "/",
        });

        setUser({ userName });
        navigate("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      //
    }
  };

  const handleRegister = async () => {
    try {
      const response = await register({
        name,
        email,
        userName,
        password,
      });
      if (response.status === 201) {
        toast.success("Register successful, please login");
        navigate("/auth");
      }
    } catch (error) {}
  };

  return (
    <div className={styles.background}>
      <div className={styles.banner}>
        <img src="./images/logo.png" className={styles.logo} alt="Logo" />
        <div className={styles.logoText}>Animal Trove</div>
      </div>

      <div className={styles.centerBox}>
        <div className={styles.imageContainer}>
          <img src="./images/login.png" className={styles.image} />
        </div>

        <div className={styles.inputContainer}>
          {isRegister && (
            <div>
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="Name"
                  name="Name"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
          )}
          <div>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={userName}
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={isRegister ? handleRegister : handleLogin}
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </div>
        {!isRegister && (
          <div className={styles.change}>
            <p className={styles.signupText}>
              Don't have an account?{" "}
              <span
                className={styles.signupLink}
                onClick={() => setIsRegister(true)}
              >
                Sign up.
              </span>
            </p>
            <Link className={styles.forgotText} to="/">
              I forgot my password.
            </Link>
          </div>
        )}
        {isRegister && (
          <div className={styles.change}>
            <Link className={styles.signupText} to="/">
              Continue as guest.
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
