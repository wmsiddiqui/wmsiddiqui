import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Page from './components/page/page';
import Header from './components/header/header';
import { Switch, Route } from 'react-router-dom';
import Resume from './components/resume/resume';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<div className="page-container">
					<Switch>
						<Route path="/Resume" component={Resume} />
						<Route component={Page} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
