import Header from './components/Header';
import background from '././assets/github.svg';
import './App.css';
import ItemList from './components/ItemList';
import { useState } from 'react';

function App() {
	const [user, setUser] = useState('');
	const [currentUser, setCurrentUser] = useState(null);
	const [repos, setRepos] = useState(null);

	const handleGetData = async () => {
		const userData = await fetch(`https://api.github.com/users/${user}`);
		const newUser = await userData.json();
		console.log(newUser);

		if (newUser.name) {
			const { avatar_url, name, bio, login } = newUser;
			setCurrentUser({ avatar_url, name, bio, login });

			const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
			const newRepos = await reposData.json();
			
			if(newRepos.length) {
				setRepos(newRepos);
			}
		}
	};

	return (
		<>
			<Header />
			<div className="content">
				<img src={background} className="background" alt="background app" />
				<div className="info">
					<div>
						<div>
							<input
								name="user"
								value={user}
								onChange={(e) => setUser(e.target.value)}
								placeholder="@username"
							/>
							<button onClick={handleGetData}>Search</button>
						</div>
					</div>

					{currentUser?.name ? (
						<>
							<div className="profile">
								<img
									className="profile-picture"
									src={currentUser.avatar_url}
								/>
								<div>
									<h3>{currentUser.name}</h3>
									<span>@{currentUser.login}</span>
									<p>{currentUser.bio}</p>
								</div>
							</div>
							<hr />
						</>
					) : null}

					{repos?.length ? (
						<>
						<div>
							<h4>Repositories</h4>
							{repos.map(repo => ( 
								<ItemList	title={repo.name}	description={repo.description}/>
							))}
						</div>
						</>
					) : null}
				</div>
			</div>
		</>
	);
}

export default App;
