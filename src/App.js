import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PageRouter from './components/pageRouter/pageRouter';
import Header from './components/header/header';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<PageRouter />
			</BrowserRouter>
		</div>
	);
}

export default App;
