import { Flex, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import BookNow from "../../components/BookNow";
import Eyebrow from "../../components/Eyebrow";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import PageTemplate from "../../templates/Page";
import styles from "./Gallery.module.scss";

const Gallery = () => {
	const imageList = [
		"/gallery/gallery_24.jpg",
		"/gallery/gallery_23.jpg",
		"/gallery/gallery_22.jpg",
		"/gallery/gallery_21.jpg",
		"/gallery/gallery_20.jpg",
		"/gallery/gallery_19.jpg",
		"/gallery/gallery_18.jpg",
		"/gallery/gallery_17.jpg",
		"/gallery/gallery_16.jpg",
		"/gallery/gallery_15.jpg",
		"/gallery/gallery_14.jpg",
		"/gallery/gallery_13.jpg",
		"/gallery/gallery_12.jpg",
		"/gallery/gallery_11.jpg",
		"/gallery/gallery_10.jpg",
		"/gallery/gallery_9.jpg",
		"/gallery/gallery_8.jpg",
		"/gallery/gallery_7.jpg",
		"/gallery/gallery_6.jpg",
		"/gallery/gallery_5.jpg",
		"/gallery/gallery_4.jpg",
		"/gallery/gallery_3.jpg",
		"/gallery/gallery_2.jpg",
		"/gallery/gallery_1.jpg",
	];
	const borderColor = [
		"brand.primary.default",
		"brand.secondary.default",
		"brand.tertiary.default",
		"brand.quad.default",
		"brand.black.default",
	];
	const ratios = ["60%", "30%", "30%"];
	return (
		<PageTemplate
			metaTitle="Gallery » Vibes DIY Studio"
			metaDescription="Check out our gallery of the Vibes DIY Studio experience along with real people and their amazing creations."
		>
			<Hero title="Gallery" bgImg="/gallery_bg.png" />
			<Section>
				<Eyebrow color="primary" align="center" />
				<Text textAlign="center">
					View our amazing collection of photos that showcase the
					amazing works of art created by us and our customers!
				</Text>
			</Section>
			<Section paddingTop={0}>
				<Flex gap="24px" gridColumn={4} flexWrap="wrap">
					{imageList.map((image, index) => {
						return (
							<Box
								key={index}
								borderRadius={16}
								borderWidth={4}
								borderStyle="solid"
								borderColor={borderColor[index % 5]}
								flexGrow={1}
								flexShrink={0}
								flexBasis={{
									base: "100%",
									md: ratios[index % 3],
								}}
								position="relative"
								display="inline-block"
							>
								<Image
									src={image}
									alt="Gallery Image"
									fill
									className={styles.Gallery__image}
								/>
							</Box>
						);
					})}
				</Flex>
				<Text
					borderTop="2px solid"
					borderColor="brand.black.light"
					marginTop="48px"
					paddingTop="16px"
				>
					Custom wall art by{" "}
					<Link href="http://prettydone.com/" target="_blank">
						<Box
							as="strong"
							_hover={{ color: "brand.primary.default" }}
						>
							Pretty Done
						</Box>
					</Link>
				</Text>
			</Section>
			<BookNow
				title="Like What You See?"
				description="Your creativity starts here. Schedule a time for paint pouring, hand painting or rug tufting today!"
			/>
		</PageTemplate>
	);
};

export default Gallery;
