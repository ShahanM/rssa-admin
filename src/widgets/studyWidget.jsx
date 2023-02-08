import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { get } from "../middleware/authrequestions";


export const StudyWidget = () => {

	const { token, logout } = useAuth();
	const [studies, setStudies] = useState([]);

	const navigate = useNavigate();

	const getStudy = async () => {
		get('study', token.access_token)
			.then((response) => {
				if (response.status === 200) {
					response.json().then((data) => {
						console.log(data);
						setStudies(data);
					});
				} else if (response.status === 401) {
					logout();
				}
			});
	}

	useEffect(() => {
		getStudy();
	}, []);

	const handleStudyClick = (study) => {
		console.log(study);
		navigate('study/' + study.id);
	}

	return (
		<div>
			{studies.length === 0 ? <p>No studies found</p> :
				<div>
					{
						studies.map((study) =>
							<Card key={'study_' + study.id} onClick={() => handleStudyClick(study)}>
								<Card.Header>
									<Card.Title>
										{study.study_name}
									</Card.Title>
								</Card.Header>
								<Card.Body>
									{study.date_created}
									{study.steps.length === 0 ? <p>No steps found</p> :
										<ul>
											{
												study.steps.map((step) =>
													<li key={'step_' + step.id}>{step.step_name}</li>
												)
											}
										</ul>
									}
								</Card.Body>
							</Card>
						)
					}
				</div>
			}
		</div>
	)
}