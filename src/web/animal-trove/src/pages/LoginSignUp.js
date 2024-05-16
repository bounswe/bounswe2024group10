import React, { useContext, useEffect, useState } from "react";
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
  const [passwordValid, setPasswordValid] = useState(true);

  function validatePassword(password) {
    // Regular expression to check for minimum 6 characters, at least one uppercase letter, and one special character
    const regex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;

    // Test the password against the regular expression
    if (regex.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  const handleLogin = async () => {
    try {
      const response = await login({ userName, password });
      console.log(response);
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
      if (!validatePassword(password)) {
        toast.error(
          "Password must contain at least 6 characters, one uppercase letter, and one special character."
        );
        return;
      }
      const response = await register({
        name,
        email,
        userName,
        password,
      });
      if (response.success) {
        toast.success("User registered successfully, please login.");
        window.setTimeout(() => {
          window.location.reload();
        }, 1200);
      } else {
        toast.error(response.message);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (password.length > 0 && isRegister) {
      setPasswordValid(validatePassword(password));
    }
  }, [password]);

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
              style={{
                transition: "all 0.7s",
                outline: "none",
                border: passwordValid ? "1px solid green" : "1px solid red",
              }}
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
