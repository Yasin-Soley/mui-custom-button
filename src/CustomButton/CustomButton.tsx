import React from 'react'
import Button from '@mui/material/Button'

// props = {
// 	children, ✅
// 	color: [inherit, primary, secondary, special, success, error, info, warning], ✅
// 	disabled, ✅
//  endIcon, ✅
// 	fullWidth, ✅
// 	size, ✅
// 	startIcon, ✅
// 	variant, ✅
// }

interface Props {
	children?: any
	type?: 'text' | 'contained' | 'outlined' | undefined
	color?:
		| 'inherit'
		| 'error'
		| 'secondary'
		| 'primary'
		| 'info'
		| 'success'
		| 'warning'
		| 'custom'
		| 'special'
		| undefined
	size?: 'small' | 'medium' | 'large' | undefined
	fullWidth?: boolean
	disabled?: boolean
	style?: React.CSSProperties | object
	endIcon?: React.ReactNode
	startIcon?: React.ReactNode
}

const CustomButton = (props: Props) => {
	return (
		<Button
			variant={props.type ?? 'contained'}
			color={props.color ?? 'primary'}
			size={props.size ?? 'medium'}
			fullWidth={props.fullWidth}
			disabled={props.disabled}
			startIcon={props.startIcon}
			endIcon={props.endIcon}
			style={props.style}
		>
			{props.children ?? 'PlaceHolder'}
		</Button>
	)
}

export default CustomButton
