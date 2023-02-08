import Container from 'react-bootstrap/Container';
import { StudyWidget } from '../widgets/studyWidget';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export const Dashboard = () => {

	// const { token } = useAuth();

	// useEffect(() => {
		// console.log('dashboard: ', token);
	// }, []);

	return (
		<Container>
			<h1>Dashboard</h1>
			<StudyWidget />
		</Container>
	)
}