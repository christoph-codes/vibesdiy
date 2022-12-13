import { INavigationProps } from "../components/Navigation";

export const navigationLinks: INavigationProps["links"] = [
	{
		link: {
			label: "Home",
			path: "/",
		},
	},
	{
		link: {
			label: "Services",
			path: "/servcies",
		},
		// dropdown: [
		// 	{
		// 		label: "Paint Pour",
		// 		path: "/services/paint-pour",
		// 	},
		// 	{
		// 		label: "Rug Tufting",
		// 		path: "/services/rug-tufting",
		// 	},
		// 	{
		// 		label: "Ceramic Pots",
		// 		path: "/services/ceramic-pots",
		// 	},
		// ],
	},
	{
		link: {
			label: "Special Events",
			path: "/special-events",
		},
	},
	{
		link: {
			label: "Shop",
			path: "/gallery",
		},
	},
	{
		link: {
			label: "About Us",
			path: "/about",
		},
	},
	{
		link: {
			label: "Contact",
			path: "/contact",
		},
	},
	{
		link: {
			label: "Book Now",
			path: "https://squareup.com/appointments/buyer/widget/yow3ms7055ip18/L9QAGAMTXZ4C7",
			target: "_blank",
		},
		cta: true,
	},
];