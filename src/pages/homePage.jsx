import { Link } from "react-router-dom"

export const HomePage = () => {
	return (
		<div>
			{/* <h1>Home Page</h1> */}
			<nav>
				{/* <Link to="/">Home</Link> */}
				<Link to="/login">Login</Link>
			</nav>
		</div>
	)
}