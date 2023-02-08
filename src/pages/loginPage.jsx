import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { LoginForm } from "../widgets/loginForm";

export const LoginPage = (props) => {


	return (
		<Container>
			<div style={{ width: '400px', margin: "2em auto 2em auto", border: "1px solid gray", borderRadius: '0.5em', padding: '2em' }}>
				<LoginForm />
			</div>
		</Container>
	)
}
