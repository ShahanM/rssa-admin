import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
// import { login } from "../middleware/authenticate";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useLocalStorage("access_token", null);
	const navigate = useNavigate();

	// call this function when you want to authenticate the user
	const login = async (data) => {
		// console.log("login", data);
		setToken(data);
		navigate("/dashboard/");
	};

	// call this function to sign out logged in user
	const logout = () => {
		setToken(null);
		navigate("/", { replace: true });
	};

	const value = useMemo(
		() => ({
			token,
			login,
			logout
		}), [token]
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};