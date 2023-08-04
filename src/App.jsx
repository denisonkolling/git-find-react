import Header from './components/Header';
import background from '././assets/background.svg';
import background2 from '././assets/github.svg';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<div className="content">
				<img src={background2} className="background" alt="background app" />
				<div className="info">
          <div>
					<div>
						<input name="user" placeholder="@username" />
						<button>Search</button>
					</div>
				</div>
				<div className="profile">
					<img
						src="https://avatars.githubusercontent.com/u/115804868?v=4"
						className="profile-picture"
					/>
					<div>
						<h3>Denison Kolling</h3>
						<p>Descrição</p>
					</div>
				</div>
        </div>
			</div>
		</>
	);
}

export default App;
