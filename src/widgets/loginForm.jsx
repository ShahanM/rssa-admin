import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from "../hooks/useAuth";
import { login } from "../middleware/authenticate";

export const LoginForm = (props) => {

	const authenticate = useAuth();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const data  = new FormData();
		data.append("grant_type", "password");
		data.append("username", username);
		data.append("password", password);
		// const data = {
			// grant_type: "password",
			// username,
			// password
		// }
		// console.log('form', data);
		if (!username || !password) {
			console.error('Username and password are required fields');
			return;
		}
		login(data)
			.then((res) => {
				// console.log(res);
				authenticate.login(res);
			});
		// authenticate.login({
		// 	email: data.get("formBasicText"),
		// 	password: data.get("formBasicPassword")
		// });
	};



	return (
		<>
			<Form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicText">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="text" placeholder="Enter username"
						value={username} onChange={(evt) => setUsername(evt.target.value)} />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password"
						values={password} onChange={(evt) => setPassword(evt.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>

		</>
	)
}