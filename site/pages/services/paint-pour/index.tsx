import { Flex, Text, Box, Image } from "@chakra-ui/react";
import Accordion from "../../../components/Accordion";
import BookNow from "../../../components/BookNow";
import Button from "../../../components/Button";
import Hero from "../../../components/Hero";
import Review from "../../../components/Review";
import Section from "../../../components/Section";
import Title from "../../../components/Title";
import PageTemplate from "../../../templates/Page";
import homeFaqs from "../../../utils/content/homeFaqs";
import paintPourFaqs from "../../../utils/content/paintPourFaqs";
import { bookLink } from "../../../utils/navLinks";
import styles from "./PaintPouring.module.scss";

const PaintPouring = () => {
	return (
		<PageTemplate
			metaTitle="Paint Pouring » Vibes DIY Studio"
			metaDescription="The paint pouring experience gives you, the artist, a unique, relaxing session using all the colors you can think of."
		>
			<Hero title="Paint Pouring" bgImg="/paint_pour_bg.png" />
			<Section>
				<Flex
					justifyContent="space-between"
					alignItems="center"
					gap={{ base: 8, md: 16 }}
					flexDirection={{ base: "column", md: "row" }}
				>
					<Box
						textAlign="center"
						paddingX="32px"
						width={{ base: "100%", md: "50%" }}
					>
						<Title h3 eyebrow="primary" textAlign="center">
							Easy to do
						</Title>
						<Text>
							We supply you with endless colors to make your
							figurine one of a kind. Squirt your paint into your
							cup, don’t mix, and pour it’s that easy.
						</Text>
					</Box>
					<Box
						textAlign="center"
						paddingX="32px"
						width={{ base: "100%", md: "50%" }}
					>
						<Title h3 eyebrow="primary" textAlign="center">
							Completely Unique
						</Title>
						<Text>
							No two paint pour projects look the same and that’s
							the beauty of this session. With endless color
							options to choose from whether you want a marble
							finish, paint splatter, or a trippy effect, pick
							your favorite 3 colors and let this relaxing, fun
							experience bring out the artist in you.
						</Text>
					</Box>
				</Flex>
				<Flex marginTop={{ base: 2, md: 8 }} justifyContent="center">
					<Button href={bookLink}>Book Now</Button>
				</Flex>
			</Section>
			<Section
				containerClass={styles.PaintPouring__gallery}
				paddingTop={0}
			>
				<Flex flexDir="column" alignItems="center">
					<Flex
						gap={6}
						flexDirection={{ base: "column", md: "row" }}
						alignItems="center"
						justifyContent="center"
						marginBottom={8}
					>
						<Image
							src="/service_paint_pouring.png"
							alt="Paint Pouring is amazing"
						/>
						<Image
							src="/services2.jpg"
							alt="Paint Pouring is amazing"
						/>
						<Image
							src="/pour1.jpg"
							alt="Paint Pouring is amazing"
						/>
					</Flex>
					<Button href="/gallery" variant="primary-outline">
						View Full Gallery
					</Button>
				</Flex>
			</Section>
			{/* Review Block */}
			<Review
				theme="primary"
				review="The most fun I’ve had in a long time. I’m inviting all my girls and
were going back!"
				author="Tina S."
				headshot="/tinas_headshot_review.png"
			/>
			<Section title="FAQs">
				<Accordion items={paintPourFaqs} theme="primary" />
			</Section>
			<BookNow
				title="Book Your Paint Pouring Session Today!"
				description="With over 20+ figures of popular
							fashion and cartoon art pieces, pick your figurine
							and get to pouring!"
			/>
		</PageTemplate>
	);
};

export default PaintPouring;
