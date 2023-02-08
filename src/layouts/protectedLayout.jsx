import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedLayout = () => {
	const { token } = useAuth();
	const outlet = useOutlet();

	if (!token) {
		return <Navigate to="/" />;
	}

	return (
		<div className='App'>
			<header className="App-header">
				RSSA Admin
			</header>
			<nav>
				<Link to="/settings">Settings</Link>
				<Link to="/profile">Profile</Link>
			</nav>
			{outlet}
		</div>
	);
};