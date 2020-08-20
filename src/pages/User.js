import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useResults from '../hooks/useResults';

import JSONPretty from 'react-json-pretty';

const User = () => {
	const { user, isAuthenticated } = useAuth0();
	const [searchApi, results, errorMessage] = useResults();

	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
				<p>{results.length}</p>
				{/* <JSONPretty data={user} /> */}
			</div>
		)
	);
};

export default User;
