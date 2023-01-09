import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import Accordion from "../../components/Accordion";
import BookNow from "../../components/BookNow";
import Button from "../../components/Button";
import FlexCard from "../../components/FlexCard";
import Hero from "../../components/Hero";
import InstagramFeed from "../../components/InstagramFeed";
import Section from "../../components/Section";
import Title from "../../components/Title";
import PageTemplate from "../../templates/Page";
import homeFaqs from "../../utils/content/homeFaqs";
import { bookLink } from "../../utils/navLinks";
import styles from "./Home.module.scss";

const Home = ({ posts }) => {
	return (
		<PageTemplate className={styles.Home}>
			<Hero
				className={styles.Home__hero}
				home
				bgImg="/bg.png"
				containerClass={styles.Home__heroContainer}
				borderBottomColor="brand.black.default"
				borderBottomWidth={6}
				borderBottomStyle="solid"
				title="DIY in Style"
			>
				<Text
					fontWeight="bold"
					lineHeight="30px"
					marginBottom={4}
					fontSize={24}
					color="white"
				>
					From start to finish immerse yourself into this creative
					space for
					<br /> an experience like no other.
				</Text>
				<Button href={bookLink} variant="white">
					Book Now
				</Button>
			</Hero>
			<Section marginTop={{ base: "-30px", md: "-60px" }} paddingTop={0}>
				<Flex
					justifyContent="center"
					columnGap={{ base: 0, sm: "6", md: "12" }}
					flexDirection={{ base: "column", sm: "row" }}
				>
					<FlexCard
						link="/services/paint-pour"
						bgImage="/pour1.jpg"
						cardColor="brand.primary.default"
					>
						Paint Pouring
					</FlexCard>
					<FlexCard
						link="/services/hand-painting"
						bgImage="/handpaint2.jpg"
						cardColor="brand.black.default"
					>
						Hand Painting
					</FlexCard>
					<FlexCard
						link="/services/rug-tufting"
						bgImage="/tufting5.jpg"
						cardColor="brand.secondary.default"
					>
						Rug Tufting
					</FlexCard>
				</Flex>
			</Section>
			<Section
				textAlign="center"
				containerClass={styles.Home__located}
				paddingTop={0}
			>
				<Title h2 textAlign="center">
					The Premiere Creative Space
				</Title>
				<Text fontSize="xl" marginBottom={4}>
					Located in The Village of Centennial Springs
					<br />
					<Link
						className="LINK"
						href="https://goo.gl/maps/Lr47ZATSsNbsaMXf6"
					>
						7557 Norman Rockwell Ln, Bldg 2 Suite 120
					</Link>
				</Text>
				<Button href="/location">Come Visit Us</Button>
			</Section>
			<Section
				bgColor="brand.quad.light"
				containerClass={styles.Home__featured}
			>
				<Flex
					justifyContent="space-around"
					alignItems="center"
					columnGap="64px"
					flexDirection={{ base: "column", md: "row" }}
				>
					<Box width="100%" marginBottom={{ base: 8, md: 0 }}>
						<Image src="/product_features.png" alt="Paint Pour" />
					</Box>
					<Box width="100%">
						<Flex
							justifyContent="space-around"
							alignItems={{ base: "center", md: "flex-start" }}
							columnGap="64px"
							flexDirection="column"
						>
							<Title
								color="brand.quad.default"
								h3
								textAlign={{ base: "center", md: "left" }}
							>{`Let's Get Creating`}</Title>
							<Text>
								{`With many options to choose from we take your favorite brands from pop culture and give you the tools to create a one of one creation that you can pride yourself in taking home. Popular on TikTok, you now have the opportunity to experience custom rug tufting at its finest, where you will learn how to create your own rug with 90+ color options so the possibilities are endless!`}
							</Text>
							<Text>
								Also we offer paint pouring or hand painting
								with all the colors you can think of over 20+
								figures of popular fashion and cartoon art
								pieces that makes for a relaxing experience
								you’ll want to relive over and over again.
							</Text>
							<Button href="/services">Learn More</Button>
						</Flex>
					</Box>
				</Flex>
			</Section>
			<BookNow
				title="Book A Session Today"
				description={
					<>
						Ready to jump into your creative experience?
						<br /> View available times now!
					</>
				}
			/>
			{/** FAQs */}
			<Section containerClass={styles.Home__faq}>
				<Title textAlign="center" marginBottom="48px">
					FAQs
				</Title>
				<Accordion
					items={homeFaqs.slice(0, 5)}
					theme="quad"
					marginBottom="32px"
				/>
				<Flex justifyContent="center">
					<Button variant="quad-outline" href="/faqs">
						View All FAQs
					</Button>
				</Flex>
			</Section>
			{/** Instagram */}
			<Section paddingTop={{ base: 0, md: "64px" }}>
				<Title textAlign="center" marginBottom={8}>
					Follow Us On Instagram
				</Title>
				<InstagramFeed />
			</Section>
		</PageTemplate>
	);
};

export default Home;

// TODO: Create custom feed when available
// <InstagramFeed posts={posts} />
// export const getStaticProps = async () => {
// 	// console.log('YYOOOOO', process.env.NEXT_APP_INSTAGRAM_KEY);

// 	const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,thumbnail_url&access_token=${process.env.NEXT_APP_INSTAGRAM_KEY}`;
// 	const data = await fetch(url);
// 	const posts = await data.json();

// 	const limited = posts.data.filter((item) => {
// 		console.log('TYPE:', item.media_type);
// 		return item.media_type === 'IMAGE';
// 	});

// 	return {
// 		props: {
// 			posts: limited.slice(0, 8),
// 		},
// 	};
// };
