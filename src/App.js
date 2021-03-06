import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page from './components/page/page';
import Header from './components/header/header';
import Resume from './components/resume/resume';
import Home from './components/home/home';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header />
				<div className="page-container">
					<Switch>
						<Route path="/Resume" component={Resume} />
						<Route exact path="/" component={Home} />
						<Route path="/wmsiddiqui" component={Home} />
						<Route component={Page} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
