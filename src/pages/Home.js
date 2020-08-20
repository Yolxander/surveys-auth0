import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	return (
		!isAuthenticated && (
			<div>
				<div className="container-home">
					<div className="intro">
						<h3>Welcome to Your Bomb surveys</h3>
					</div>
					<div className="login-button">
						<button className="button" onClick={() => loginWithRedirect()}>
							Log in
						</button>
					</div>
				</div>
			</div>
		)
	);
};

export default Home;
