import Header from './components/Header';
import background from '././assets/github.svg';
import './App.css';
import ItemList from './components/ItemList';

function App() {
	return (
		<>
			<Header />
			<div className="content">
				<img src={background} className="background" alt="background app" />
				<div className="info">
					<div>
						<div>
							<input name="user" placeholder="@username" />
							<button>Search</button>
						</div>
					</div>
					<div className="profile">
						<img
							className="profile-picture"
							src="https://avatars.githubusercontent.com/u/115804868?v=4"
						/>
						<div>
							<h3>Denison Kolling</h3>
							<span>@denisonkolling</span>
							<p>description</p>
						</div>
					</div>
					<hr />
					<div>
						<h4>Repositories</h4>
						<ItemList title='map-react' description='a react map application' />
						<ItemList title='map-react' description='a react map application' />
						<ItemList title='map-react' description='a react map application' />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
