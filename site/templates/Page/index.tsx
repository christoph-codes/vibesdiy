import { ReactNode, FC } from "react";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";
import Head from "next/head";
import styles from "./Page.module.scss";
import AnnouncementBar from "../../components/AnnouncementBar";

export type PageProps = {
	className?: string;
	metaData?: {
		title: string;
		description: string;
		image?: string | StaticImageData | any;
	};
	children: ReactNode;
};
/**
 * 'Page Template: Use this template to establish the Green Iguana layout and structure of all `pages`.'
 */
const PageTemplate: FC<PageProps> = ({
	className,
	metaData = {
		title: "Vibes DIY Studio » Create the life you want to see",
		image: "/vibes-seo_image.png",
		description:
			"The premiere DIY studio in Las Vegas, NV located in Centennial Hills.",
	},
	children,
}) => {
	const router = useRouter();
	const domain = "https://vibesdiystudio.com";
	const url = router && router.asPath ? router.asPath : undefined;
	const canonical = url && url === "/" ? domain : domain + url;
	return (
		<>
			<Head>
				<title>{metaData.title}</title>
				<meta charSet="utf-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				{metaData.description && (
					<meta content={metaData.description} name="description" />
				)}
				<meta content="follow, index" name="robots" />
				<meta content="brand.primary.default" name="theme-color" />
				<meta
					content="brand.primary.default"
					name="msapplication-TileColor"
				/>
				<link href="/favicon.ico" rel="shortcut icon" />

				{url && <link href={canonical} rel="canonical" />}
				<meta content="en_US" property="og:locale" />
				<meta content={metaData.title} property="og:title" />
				<meta
					content={metaData.description}
					property="og:description"
				/>
				<meta content={canonical} property="og:url" />
				<meta content="/vibes-seo_image.png" property="og:image" />
				<meta content="summary_large_image" name="twitter:card" />
				<meta content={metaData.description} property="og:image:alt" />
			</Head>
			{/** Announcement Bar */}
			<AnnouncementBar>
				<strong>NOW OPEN!</strong> 7575 Norman Rockwell Ln, Bldg 2 Suite
				120 | 702.123.4567
			</AnnouncementBar>
			{/** Header */}
			<main className={`${styles.PageTemplate} ${className}`}>
				{children}
			</main>
			{/** Footer */}
		</>
	);
};

export default PageTemplate;
