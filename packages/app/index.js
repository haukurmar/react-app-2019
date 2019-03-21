import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

const MOUNT_NODE = document.getElementById('react-app')
const Root = (
	<Router>
		<Route component={App} />
	</Router>

)

ReactDOM.render(Root, MOUNT_NODE);
