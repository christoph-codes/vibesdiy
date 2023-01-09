import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Title from "../components/Title";
import PageTemplate from "../templates/Page";

const About = () => {
	return (
		<PageTemplate
			metaTitle="About"
			metaDescription="Learn About Vibes DIY Studio and how they came to be in the top creative studio in Las Vegas"
		>
			<Hero title="About" bgImg="/about_bg.png" />
			<Section>
				<Flex
					justifyContent="space-between"
					columnGap={24}
					flexDirection={{ base: "column", md: "row" }}
				>
					<Box width={{ base: "100%", md: "50%" }}>
						<Image
							src="/vibes_seo.png"
							alt="Image of the owners of Vibes DIY Studio"
							flexGrow={1}
							flexShrink={1}
							marginBottom={{ base: 8, md: 0 }}
							height="auto"
						/>
					</Box>
					<Box width={{ base: "100%", md: "50%" }}>
						<Title h2>About Vibes DIY Studio</Title>
						<Text lineHeight="7">
							Las Vegas doesn’t have many creative spaces in the
							northwest valley for the next generation. What
							started as a prayer for the family to find a
							creative space to bring our business ideas to life.
							We took our love for diy projects, fashion, pop
							culture, and creative outlets to birth “Vibes Diy
							Studio.”
						</Text>
						<Text lineHeight="7">
							Searching the internet & scrolling through TikTok we
							located cities on the east coast and overseas
							countries that had businesses that did solely rug
							tufting or paint pouring, but not both experiences
							in one location. That’s where “Vibes” comes in, we
							took multiple experiences and put our twist on it,
							to give Las Vegas a creative space for all
							generations to come and express themselves through
							art.
						</Text>
					</Box>
				</Flex>
			</Section>
		</PageTemplate>
	);
};

export default About;
