import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';
import NavBar from './Component/NavBar';

const App = () => {
	return (
		<Router>
			<NavBar />
			<main>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/about" exact>
						<About />
					</Route>
					<Redirect to="/"></Redirect>
				</Switch>
			</main>
		</Router>
	);
};

export default App;
