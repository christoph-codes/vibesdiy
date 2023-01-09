import { Flex, Text, Box, Image } from "@chakra-ui/react";
import Accordion from "../../../components/Accordion";
import BookNow from "../../../components/BookNow";
import Button from "../../../components/Button";
import Hero from "../../../components/Hero";
import Review from "../../../components/Review";
import Section from "../../../components/Section";
import Title from "../../../components/Title";
import PageTemplate from "../../../templates/Page";
import paintingFaqs from "../../../utils/content/paintingFaqs";
import { bookLink } from "../../../utils/navLinks";
import styles from "./HandPainting.module.scss";

const HandPainting = () => {
	return (
		<PageTemplate
			metaTitle="Hand Painting » Vibes DIY Studio"
			metaDescription="The Hand Painting experience gives you, the artist, a unique, relaxing session using all the colors you can think of."
		>
			<Hero title="Hand Painting" bgImg="/handpaint1.jpg" />
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
						<Title h3 eyebrow="black" textAlign="center">
							Easy to do
						</Title>
						<Text>
							Choose your favorite pop culture item and bring out
							your inner child. Choose your paint, get your
							brushes, and enjoy as you paint your one of a kind
							masterpiece.
						</Text>
					</Box>
					<Box
						textAlign="center"
						paddingX="32px"
						width={{ base: "100%", md: "50%" }}
					>
						<Title h3 eyebrow="black" textAlign="center">
							Completely Unique
						</Title>
						<Text>
							With over 50+ different figurines from purses,
							sneakers, cartoon characters, and baseball hats the
							possibilities are endless.
						</Text>
					</Box>
				</Flex>
				<Flex marginTop={{ base: 2, md: 8 }} justifyContent="center">
					<Button href={bookLink} variant="black">
						Book Now
					</Button>
				</Flex>
			</Section>
			<Section
				containerClass={styles.HandPainting__gallery}
				paddingTop={0}
			>
				<Flex flexDir="column" alignItems="center">
					<Flex
						gap={6}
						flexDirection={{ base: "column", md: "row" }}
						marginBottom={8}
					>
						<Image
							src="/handpaint6.png"
							alt="Hand Painting is amazing"
						/>
						<Image
							src="/handpaint3.jpg"
							alt="Hand Painting is amazing"
						/>
						<Image
							src="/handpaint2.jpg"
							alt="Hand Painting is amazing"
						/>
					</Flex>
					<Button href="/gallery" variant="black-outline">
						View Full Gallery
					</Button>
				</Flex>
			</Section>
			{/* Review Block */}
			<Review
				theme="black"
				review="It can be so therapeutic just listening to music and painting and to my surprise it actually turned out pretty nice."
				author="Shannon T."
				headshot="/shannons_review_photo.png"
			/>
			<Section title="FAQs">
				<Accordion items={paintingFaqs} theme="black" />
			</Section>
			<BookNow
				title="Book Your Hand Painting Session Today!"
				description="With over 20+ figures of popular
							fashion and cartoon art pieces, pick your figurine
							and get to pouring!"
			/>
		</PageTemplate>
	);
};

export default HandPainting;
