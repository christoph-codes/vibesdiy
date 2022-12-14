import { Flex, Text, Box, Image } from "@chakra-ui/react";
import Accordion from "../../../components/Accordion";
import BookNow from "../../../components/BookNow";
import Button from "../../../components/Button";
import Hero from "../../../components/Hero";
import Review from "../../../components/Review";
import Section from "../../../components/Section";
import Title from "../../../components/Title";
import PageTemplate from "../../../templates/Page";
import tuftingFaqs from "../../../utils/content/tuftingFaqs";
import { bookLink } from "../../../utils/navLinks";
import styles from "./RugTufting.module.scss";

const RugTufting = () => {
	return (
		<PageTemplate
			metaTitle="Rug Tufting » Vibes DIY Studio"
			metaDescription="Popular all over TikTok, the rug tufting experience gives you all the tools to create a one of one creation that you can pride yourself in taking home."
		>
			<Hero title="Rug Tufting" bgImg="/tufting5.jpg" />
			<Section>
				<Flex
					justifyContent="space-between"
					alignItems="flex-start"
					gap={{ base: 8, md: 16 }}
					flexDirection={{ base: "column", md: "row" }}
				>
					<Box
						textAlign="center"
						paddingX="32px"
						width={{ base: "100%", md: "50%" }}
					>
						<Title h3 eyebrow="secondary" textAlign="center">
							Easy to do
						</Title>
						<Text>
							With an easy to follow tutorial by your instructor,
							you will have the ability to choose your yarn and
							start creating your rug.
						</Text>
					</Box>
					<Box
						textAlign="center"
						paddingX="32px"
						width={{ base: "100%", md: "50%" }}
					>
						<Title h3 eyebrow="secondary" textAlign="center">
							Completely Unique
						</Title>
						<Text>
							With over 90+ different colors of yarn, if you can
							think it, trace it, you can make it. Here is to a
							one of a kind rug to show off to your followers,
							houseguests and friends.
						</Text>
					</Box>
				</Flex>
				<Flex marginTop={{ base: 2, md: 8 }} justifyContent="center">
					<Button href={bookLink} variant="secondary">
						Book Now
					</Button>
				</Flex>
			</Section>
			<Section containerClass={styles.RugTufting__gallery} paddingTop={0}>
				<Flex flexDir="column" alignItems="center">
					<Flex
						gap={6}
						flexDirection={{ base: "column", md: "row" }}
						marginBottom={8}
					>
						<Image
							src="/tufting2.jpg"
							alt="Rug Tufting is amazing"
						/>
						<Image
							src="/tufting3.jpg"
							alt="Rug Tufting is amazing"
						/>
						<Image
							src="/tufting4.jpg"
							alt="Rug Tufting is amazing"
						/>
					</Flex>
					<Button href="/gallery" variant="secondary-outline">
						View Full Gallery
					</Button>
				</Flex>
			</Section>
			{/* Review Block */}
			<Review
				theme="secondary"
				review="Way easier to do than I thought, but my rug turned out FIRE! 🔥"
				author="Christoph J."
				headshot="/christophj_headshot_review.jpg"
			/>
			<Section title="FAQs">
				<Accordion items={tuftingFaqs} theme="secondary" />
			</Section>
			<BookNow
				title="Book Your Rug Tufting Session Today!"
				description="You`ll be given a simple tutorial on how to create your own rug with over 90 different color options. Pick your yarn and get to tufting!"
			/>
		</PageTemplate>
	);
};

export default RugTufting;
