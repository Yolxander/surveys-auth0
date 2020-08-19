import React from 'react';
import LoginButton from './components/Login-Button';
import LogoutButton from './components/Logout-Button';
import { useAuth0 } from '@auth0/auth0-react';
import User from './pages/User';
import Home from './pages/Home';
import './style.css';

const App = () => {
	const { isLoading } = useAuth0();

	return (
		<div className="container">
			<div className="nav-bar">
				<div className="app-name">
					Surveys
				</div>
				<div className="nav-buttons">
					<LoginButton />
					<LogoutButton />
				</div>
			</div>
			<div>
				<User />
			</div>
			<div>
				<Home />
			</div>
		</div>
	);
};

export default App;


  