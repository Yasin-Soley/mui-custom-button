import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@mui/material/styles'
import './index.css'

import App from './App'
import { theme } from './theme'

// cause we are sure there will be an element with id #root, we can omit null from types
// TODO: two ways:
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// const root = ReactDOM.createRoot(document.getElementById('root')!)

// const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
