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
						<Title h2>About Vibes DIY Studio</Title>
						<Text lineHeight="7">
							Like lots of others during the 2020 pandemic, we
							experienced many positives and some negatives in
							life. After many years and longer days working
							remote at a desk and in front of the computer, lots
							of medical testing, I learned sitting 8+ hours a day
							until retirement was not going to be any good for
							me. I decided that in 2022 I was going to set a goal
							and depend on prayer to guide me to do something
							different. I get a creative itch regularly and want
							to do some type of DIY project. I always thought if
							I could do what I wanted and be happy I would be
							able to create and see others happy as well.
						</Text>
						<Text lineHeight="7">
							Once deciding to take the leap of faith and
							brainstorming with my daughter we came up with
							Vibes. After watching many TikTok videos, we tried
							our hand at rug tufting and haven’t looked back.
							What better to have a creative space for people to
							come and be happy and express their creative vibe.
							My daughter Cooper and her husband CJ are creatives
							themselves. Combining Kenzie Rae and to be able to
							create with them has been a joy. Anything for the
							grand babies, as you may see them growing up in the
							studio. Can’t wait to see all our friends and family
							come through and all of you we don’t even know yet.
							Cheers to 2023. Happy New Year.
						</Text>
					</Box>
				</Flex>
			</Section>
		</PageTemplate>
	);
};

export default About;
