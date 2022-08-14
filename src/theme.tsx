import { createTheme } from '@mui/material/styles'
import {
	blue,
	purple,
	red,
	brown,
	yellow,
	green,
	cyan,
} from '@mui/material/colors'

// declare module '@mui/material/styles' {
// 	interface Theme {
// 		status: {
// 			danger: React.CSSProperties['color']
// 		}
// 	}

// 	interface Palette {
// 		custom: string
// 		special: string
// 	}
// 	interface PaletteOptions {
// 		custom: PaletteOptions['primary']
// 		special: PaletteOptions['primary']
// 	}

// 	interface PaletteColor {
// 		darker?: string
// 	}
// 	interface SimplePaletteColorOptions {
// 		darker?: string
// 	}
// 	interface ThemeOptions {
// 		status: {
// 			danger: React.CSSProperties['color']
// 		}
// 	}
// }

declare module '@mui/material/styles' {
	interface Palette {
		custom: Palette['primary']
		special: Palette['primary']
	}

	// allow configuration using `createTheme`
	interface PaletteOptions {
		custom?: PaletteOptions['primary']
		special?: PaletteOptions['primary']
	}
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		custom: true
		special: true
	}
}

export const theme = createTheme({
	palette: {
		primary: purple,
		secondary: blue,
		success: green,
		info: blue,
		error: red,
		warning: yellow,
		special: {
			main: brown[700],
			contrastText: '#fff',
		},
		// custom color. used 'cyan-400' as an example
		custom: {
			main: cyan[400],
		},
	},
})
