import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const HomeLayout = () => {
	const { token } = useAuth();

	if (token) {
		return <Navigate to="/dashboard/" />;
	}

	return (
		<div className="App">
			<header className="App-header">
				RSSA Admin
			</header>
			{/* <nav>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
			</nav> */}
			<Outlet />
		</div>
	)
};