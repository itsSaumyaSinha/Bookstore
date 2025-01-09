import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export default function AuthProvider({ children }) {
    // Fetch the Users data from localStorage
    const storedUser = localStorage.getItem("Users");

    let parsedUser = undefined;
    
    // Only parse if the storedUser is valid JSON
    if (storedUser) {
        try {
            parsedUser = JSON.parse(storedUser);
        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
        }
    }

    // Set authUser state
    const [authUser, setAuthUser] = useState(parsedUser);

    return (
        // Provide authUser and setAuthUser through the context
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
