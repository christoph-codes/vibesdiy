import { INavigationProps } from "../components/Navigation";

export const bookLink = '/book';
export const facebookLink = 'https://www.facebook.com/profile.php?id=100088242930394';
export const twitterLink = 'https://twitter.com/vibesdiystudio';
export const instagramLink = 'https://www.instagram.com/vibesdiystudio/';

export const homepagePath: '/home' | '/' = '/home';

export const navigationLinks: INavigationProps["links"] = [
	{
		link: {
			label: "Home",
			path: homepagePath,
		},
	},
	{
		link: {
			label: "Services",
			path: "/services",
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
			label: "Gallery",
			path: "/gallery",
		},
	},
	// {
	// 	link: {
	// 		label: "Special Events",
	// 		path: "/special-events",
	// 	},
	// },
	// {
	// 	link: {
	// 		label: "Shop",
	// 		path: "/shop",
	// 	},
	// },
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
			path: bookLink,
		},
		cta: true,
	},
];

export const utilityLinks: INavigationProps["links"] = [
	{
		link: {
			label: "Privacy Policy",
			path: "/privacy-policy",
		},
	},
	{
		link: {
			label: "Terms of Service",
			path: "/terms",
		},
	},
]