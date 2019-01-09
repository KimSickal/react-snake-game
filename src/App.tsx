import * as React from 'react';

import {
	KeyboardHandlerContainer,
	GridContainer,
} from './containers';

import './App.css';

export class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<KeyboardHandlerContainer/>
				<GridContainer/>
			</div>
		);
	}
}