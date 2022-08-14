import React from 'react'

import { Stack } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import InstagramIcon from '@mui/icons-material/Instagram'
import './App.css'

import CustomButton from './CustomButton/CustomButton'

function App() {
	return (
		<>
			<h1>Hello Tallguy!</h1>
			<Stack spacing={2} direction="row">
				<CustomButton
					startIcon={<AccountCircleIcon />}
					color="secondary"
					type="text"
				/>
				<CustomButton color="primary" type="contained" size="small" />
				<CustomButton color="primary" type="contained">
					Text from props.children
				</CustomButton>
				<CustomButton
					color="primary"
					type="contained"
					endIcon={<InstagramIcon />}
					size="large"
				/>
				<CustomButton color="info" type="outlined" />
				<CustomButton color="custom" type="outlined" disabled />
			</Stack>
			<CustomButton
				style={{ margin: '1rem auto' }}
				fullWidth
				color="error"
			/>
		</>
	)
}

export default App
