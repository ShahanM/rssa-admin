import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { get } from '../middleware/authrequestions';
import Card from "react-bootstrap/Card";

export const StudyDetailPage = () => {

	const { token, logout } = useAuth();
	const studyid = useLocation().pathname.split('/')[3];
	const [study, setStudy] = useState({});

	const getStudy = async () => {
		get('study/' + studyid, token.access_token)
			.then((response) => {
				if (response.status === 200) {
					response.json().then((data) => {
						console.log(data);
						setStudy(data);
					});
				} else if (response.status === 401) {
					logout();
				}
			});
	}

	useEffect(() => {
		getStudy();
	}, []);


	return (
		<div>
			{Object.entries(study).length !== 0 ?
				<div>
					<h1>{study.study_name}</h1>
					{
						study.steps.length === 0 ? <p>No steps found</p> :
							<div>
								{
									study.steps.sort((a, b) => a.step_order - b.step_order).map((step) =>
										<Card key={'step_' + step.id}>
											<Card.Header>
												<Card.Title>
													{step.step_name}
												</Card.Title>
											</Card.Header>
											<Card.Body>
												{step.step_order}
												<Card.Text>
													{step.step_description}
												</Card.Text>
											</Card.Body>

										</Card>
									)
								}
							</div>
					}
				</div>
				:
				<></>
			}
		</div>
	)
}