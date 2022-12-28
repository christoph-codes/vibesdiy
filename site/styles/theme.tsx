import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		primary: {
			default: "#E31E26",
			hover: "#FF545B",
			light: "#FFF0F1",
		},
		secondary: {
			default: "#279546",
			hover: "#40BC63",
			light: "#F3FFF7",
		},
		tertiary: {
			default: "#FCD504",
			hover: "#FFE55C",
			light: "#fffdf1",
		},
		quad: {
			default: "#3C53A4",
			hover: "#4F70E2",
			light: "#F0F8FF",
		},
		black: {
			default: "#010101",
			hover: "#2a2a2a",
			light: "#F4F4F4",
		},
		white: {
			default: "#FFFFFF",
			hover: "#DEDEDE",
		},
	},
};
const fonts = {
	body: "Montserrat, sans-serif",
	heading: "Montserrat, sans-serif",
	mono: "Menlo, monospace",
};

const theme = extendTheme({ colors, fonts });

export default theme;
