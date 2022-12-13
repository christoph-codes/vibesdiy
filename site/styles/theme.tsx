import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		primary: {
			default: "#E31E26",
			hover: "#FF545B",
		},
		secondary: {
			default: "#279546",
			hover: "#40BC63",
		},
		tertiary: {
			default: "#FCD504",
			hover: "#FFE55C",
		},
		quad: {
			default: "#3C53A4",
			hover: "#4F70E2",
		},
		black: {
			default: "#010101",
			hover: "#2a2a2a",
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
