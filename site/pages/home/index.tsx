import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Button from "../../components/Button";
import FlexCard from "../../components/FlexCard";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Title from "../../components/Title";
import PageTemplate from "../../templates/Page";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<PageTemplate className={styles.Home}>
			<Hero
				className={styles.Home__hero}
				home
				bgImg="/bg.png"
				containerClass={styles.Home__heroContainer}
			>
				<Title textAlign="center" color="white" textShadow="xl">
					DIY in style
				</Title>
				<Text marginBottom={4} fontSize={24} color="white">
					Let your creativity flow through your fingertips. For Proof
					Only.
				</Text>
				<Button href="/book-now" variant="white">
					Book Now
				</Button>
			</Hero>
			<Section marginTop="-30" paddingTop={0}>
				<Flex justifyContent="center" columnGap="12">
					<FlexCard cardColor="brand.primary.default">
						Paint Pouring
					</FlexCard>
					<FlexCard cardColor="brand.black.default">
						Hand Painting
					</FlexCard>
					<FlexCard cardColor="brand.secondary.default">
						Rug Tufting
					</FlexCard>
				</Flex>
			</Section>
			<Section textAlign="center" containerClass={styles.Home__located}>
				<Title h2 textAlign="center">
					The Premiere Creative Space
				</Title>
				<Text fontSize="xl" marginBottom={4}>
					Located in Something Something Shopping Center.
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
			{/** Location Call out */}
			{/** Featured Content */}
			{/** Book Now Section */}
			{/** FAQs */}
			{/** Instagram */}
		</PageTemplate>
	);
};

export default Home;
