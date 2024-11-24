import { createContext, useContext, useState, useEffect } from "react";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { apiLogin, apiValidateToken, apiRegister } from "../services/auth";



const REGISTER_API_URL = 'http://35.246.188.121:8080/api/auth/register'; // New Registration API URL


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const [user, setUser] = useState({ name: "", isAuthenticated: false, role: "" });
    const [loading, setLoading] = useState(true); // Add loading state
    const navigate = useNavigate(); // Get navigate function

    useEffect(() => {
        const checkAuthStatus = async () => {
            const token = localStorage.getItem('authToken');

            if (token) {
                try {
                    const response = await apiValidateToken(token);

                    if (!response.ok) {
                        throw new Error('Token validation failed');
                    }

                    const data = await response.json();
                    setUser({
                        name: data.username,
                        isAuthenticated: true,
                        role: "USER",
                        img: "",
                        tag: 0
                    });
                } catch (error) {
                    console.error('Token validation error:', error);
                    localStorage.removeItem('authToken');
                }
            }

            setLoading(false); // Set loading to false after checking auth status
        };

        checkAuthStatus();
    }, []);

    const login = async (userName, password) => {
        try {
            // Replace with your actual API URL


            const response = await apiLogin({ username: userName, password: password });

            // Check if login was successful based on the response body
            if (!response.isSuccessful) {
                // If isSuccessful is false, return or throw an error based on the message
                return Promise.reject(response.message || "Login failed");
            }

            // Extract the token, username, and tag from the successful response
            const { token, username, tag } = response;

            // Store the token and user info in localStorage
            localStorage.setItem('authToken', token);

            // Example user state handling (adjust according to your logic)
            setUser({
                name: username,
                isAuthenticated: true,
                role: "user",  // Adjust this based on role handling if needed
                img: "",  // You can fetch or update user image if available
                tag: tag   // Tag information from LoginResponse
            });

            return "success";
        } catch (error) {
            console.error('Login error:', error);
            return Promise.reject(error.message || "Incorrect username or password");
        }
    };
    const register = async (registerData) => {
        try {
            const response = await apiRegister(registerData);

            // Check if registration was successful based on the response body
            if (!response.isSuccessful) {
                return Promise.reject(response.message || "Registration failed");
            }

            return response; // You can return the success message or handle it as needed
        } catch (error) {
            console.error('Registration error:', error);
            return Promise.reject(error.message || "Error occurred during registration");
        }
    };

    const logout = async () => {

        localStorage.removeItem('authToken');
        setUser({ name: "", isAuthenticated: false, role: "", img: "", tag: -1 });
    };



    if (!loading) {
        return (
            <AuthContext.Provider value={{ user, login, logout, register }}>
                <>
                    <RenderMenu />
                    <RenderRoutes />
                </>
            </AuthContext.Provider>
        );

    }


};
