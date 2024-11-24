import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles/Login.module.css"; // Reusing the same styles

const SignUp = () => {
    const navigate = useNavigate();
    const { register } = AuthData(); // Ensure this is correctly defined in your AuthWrapper
    const [formData, setFormData] = useReducer(
        (formData, newItem) => {
            return { ...formData, ...newItem };
        },
        { email: "", username: "", password: "", name: "", tag: -1 }
    );
    const [errorMessage, setErrorMessage] = useState(null);
    const [step, setStep] = useState(1);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


    const doSignUp = async () => {
        const { email, username, password, name, tag } = formData;

        // Validate inputs
        if (step === 1) {
            if (!email || !username || !password || !name) {
                setErrorMessage("All fields are required."); // Warning message for blank fields
                return;
            }
            setErrorMessage(null); // Clear previous error message
            setStep(2);
            return;
        }

        if (step === 2) {
            if (tag === -1) {
                setErrorMessage("Please select a user type."); // Warning message for blank fields
                return;
            }

            try {
                const response = await register({ email, username, password, name, tag });

                // Check the response for success or error
                if (response.isSuccessful) {
                    toast("Registration successful!");
                    navigate("/"); // Redirect after success message
                } else {
                    setErrorMessage(response.message); // Display error message sent from the backend
                }
            } catch (error) {
                setErrorMessage(error.message || "Registration failed"); // Handle any other errors
            }
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            doSignUp();
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.imageContainer}>
                <div style={{ objectFit: "cover", width: "100%" }}>
                    <img src="/background.jpg" alt="Background" />
                </div>
            </div>
            {(step === 1) ? (
                <div className={styles.inputs}>
                    <h2>Join Tradeverse community</h2>
                    <span>
                        Get more features and priviliges by joining to the most helpful
                        community
                    </span>
                    <div className={styles.input}>
                        <input
                            value={formData.name}
                            onChange={(e) => setFormData({ name: e.target.value })}
                            onKeyDown={handleKeyDown}
                            type="text"
                            placeholder="Enter your full name"
                            style={{ marginTop: "10px", height: "40px" }}
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            value={formData.username}
                            onChange={(e) => setFormData({ username: e.target.value })}
                            onKeyDown={handleKeyDown}
                            type="text"
                            placeholder="Enter your username"
                            style={{ marginTop: "10px", height: "40px" }}
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            value={formData.email}
                            onChange={(e) => setFormData({ email: e.target.value })}
                            onKeyDown={handleKeyDown}
                            type="email"
                            placeholder="Enter your email"
                            style={{ marginTop: "10px", height: "40px" }}
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            value={formData.password}
                            onChange={(e) => setFormData({ password: e.target.value })}
                            onKeyDown={handleKeyDown}
                            type="password"
                            placeholder="Enter your password"
                            style={{ marginTop: "10px", height: "40px" }}
                        />
                    </div>

                    <div className={styles.nextButtonContainer}>
                        <button className={styles.button} onClick={doSignUp}>
                            Next
                        </button>
                    </div>


                    {/* Display error message */}
                    {errorMessage && (
                        <div style={{ color: "red", marginTop: "10px" }}>
                            {errorMessage}
                        </div>
                    )}
                </div>) :
                (
                    <div className={styles.inputs}>
                        <h2>Select Your User Type</h2>
                        <span style={{marginBottom: "15px"}}>Tell us what kind of user you are</span>

                            {[
                                { label: "Beginner", emoji: "🏁" },
                                { label: "Day Trader", emoji: "📊" },
                                { label: "Investor", emoji: "💼" },
                                { label: "Finance Enthusiast", emoji: "💵" },
                                { label: "Financial Analyst", emoji: "📈" },
                            ].map((type, index) => (
                                <button
                                    key={type.label}
                                    className={`${styles.tagButton} ${formData.tag === index ? styles.activeTagButton : ""
                                        }`}
                                    onClick={() => setFormData({ tag: index })}
                                >
                                    <span style={{ fontSize: "16px", fontWeight: "bold" }}>{type.label}</span>
                                    <span style={{ fontSize: "20px" }}>{type.emoji}</span>
                                </button>
                            ))}
                        <div className={styles.buttonContainer}>
                            <button
                                className={`${styles.button} ${styles.backButton}`}
                                onClick={() => setStep(1)} // Go back to Step 1
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "#ccc",
                                    color: "#000",
                                }}
                            >
                                Back
                            </button>
                            <button className={styles.button} onClick={doSignUp}>
                                Submit
                            </button>
                        </div>

                        {/* Display error message */}
                        {errorMessage && (
                            <div style={{ color: "red", marginTop: "10px" }}>
                                {errorMessage}
                            </div>
                        )}
                    </div>
                )}

            <ToastContainer />
        </div>
    );
};

export default SignUp;
