import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/Login.module.css';


const Login = () => {
    const navigate = useNavigate();
    const { login } = AuthData();
    const [formData, setFormData] = useReducer((formData, newItem) => {
        return { ...formData, ...newItem };
    }, { userName: "", password: "" });
    const [errorMessage, setErrorMessage] = useState(null);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const doLogin = async () => {

        if (!formData.userName) {
            setErrorMessage('Username cannot be null'); // Warning message for blank username
            return;
        }

        if (!formData.password) {
            setErrorMessage('Password cannot be null'); // Warning message for blank password
            return;
        }
        setErrorMessage(null); // Clear previous error message
        await delay(1000); // Wait for 1 second
        try {
            const response = await login(formData.userName, formData.password);

            // Check the response for success or error
            if (response.success) {
                toast("Login successful!");


            }
            navigate("/home"); // Redirect after success message
        } catch (error) {
            // Display the error message sent from the backend
            setErrorMessage(error);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            doLogin();
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.imageContainer}>
                <div style={{ objectFit: "cover", width: "100%" }}>
                    <img
                        src="/background.jpg"
                    />
                </div>
            </div>
            <div className={styles.inputs}>
                <h2>We’ve missed you!</h2>
                <span>More than 150 subforums are waiting for your wise suggestions!</span>
                <div className={styles.input}>

                    <input
                        value={formData.userName}
                        onChange={(e) => setFormData({ userName: e.target.value })}
                        onKeyDown={handleKeyDown}
                        type="text"
                        placeholder="Enter your username"
                        style={{ marginTop: '10px', height: '40px' }}
                    />
                </div>

                <div className={styles.input}>
                    <input
                        value={formData.password}
                        onChange={(e) => setFormData({ password: e.target.value })}
                        onKeyDown={handleKeyDown}
                        type="password"
                        placeholder="Enter your password"
                        style={{ marginTop: '10px', height: '40px' }}
                    />
                </div>

                <div >
                    <button className={styles.button} onClick={doLogin}>Log in</button>
                </div>

                {/* Display error message */}
                {errorMessage && (
                    <div style={{ color: 'red', marginTop: '10px' }}>
                        {errorMessage}
                    </div>
                )}
            </div>

            <ToastContainer />
        </div>
    );
};

export default Login;
