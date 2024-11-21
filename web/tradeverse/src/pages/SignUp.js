import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/Login.module.css'; // Reusing the same styles

const SignUp = () => {
    const navigate = useNavigate();
    const { register } = AuthData(); // Ensure this is correctly defined in your AuthWrapper
    const [formData, setFormData] = useReducer((formData, newItem) => {
        return { ...formData, ...newItem };
    }, { email: "", username: "", password: "", name: "" });
    const [errorMessage, setErrorMessage] = useState(null);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const doSignUp = async () => {
        const { email, username, password, name } = formData;

        // Validate inputs
        if (!email || !username || !password || !name) {
            setErrorMessage('All fields are required.'); // Warning message for blank fields
            return;
        }
        setErrorMessage(null); // Clear previous error message
        await delay(1000); // Wait for 1 second
        
        try {
            const response = await register({ email, username, password, name });
            
            // Check the response for success or error
            if (response.isSuccessful) {
                toast("Registration successful!");
                navigate("/login"); // Redirect after success message
            } else {
                setErrorMessage(response.message); // Display error message sent from the backend
            }
        } catch (error) {
            setErrorMessage(error.message || "Registration failed"); // Handle any other errors
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            doSignUp();
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.inputs}>
                <div>
                    <h2>Join Tradeverse community</h2>
                    <span >Get more features and priviliges by joining to the most helpful community</span>
                    <div className={styles.input}>
                        <input
                            value={formData.name}
                            onChange={(e) => setFormData({ name: e.target.value })}
                            onKeyDown={handleKeyDown}
                            type="text"
                            placeholder="Enter your full name"
                            style={{ marginTop: '10px', height: '40px' }}
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            value={formData.username}
                            onChange={(e) => setFormData({ username: e.target.value })}
                            onKeyDown={handleKeyDown}
                            type="text"
                            placeholder="Enter your username"
                            style={{ marginTop: '10px', height: '40px' }}
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            value={formData.email}
                            onChange={(e) => setFormData({ email: e.target.value })}
                            onKeyDown={handleKeyDown}
                            type="email"
                            placeholder="Enter your email"
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
                    <div>
                        <button className={styles.button} onClick={doSignUp}>Sign Up</button>
                    </div>

                    {/* Display error message */}
                    {errorMessage && (
                        <div style={{ color: 'red', marginTop: '10px' }}>
                            {errorMessage}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.imageContainer}>
                <div style={{ objectFit: "cover", width: "100%" }}>
                    <img 
                        src="/background.jpg" 
                        alt="Background" 
                    />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
