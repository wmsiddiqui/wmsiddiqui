import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Page from './components/page/page';
import Header from './components/header/header';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Page />
			</BrowserRouter>
		</div>
	);
}

export default App;
