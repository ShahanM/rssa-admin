import { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";
import ProgressBar from "react-bootstrap/ProgressBar";
import Alert from "react-bootstrap/Alert";

export const AuthLayout = () => {
	const outlet = useOutlet();


	const { tokenPromise } = useLoaderData();

	return (
		<Suspense fallback={<ProgressBar />}>
			<Await
				resolve={tokenPromise}
				errorElement={<Alert severity="error">Something went wrong!</Alert>}
				children={(access_token) => (
					<AuthProvider accessToken={access_token}>{outlet}</AuthProvider>
				)}
			/>
		</Suspense>
	);
};