import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Title from '../components/Title';
import PageTemplate from '../templates/Page';

const About = () => {
	return (
		<PageTemplate
			metaTitle='About Vibes DIY Studio'
			metaDescription='Learn About Vibes DIY Studio and how they came to be the newest creative studio in Las Vegas'
			metaImage='/about_team.png'
		>
			<Hero title='About' bgImg='/about_bg.png' />
			<Section>
				<Flex
					justifyContent='space-between'
					columnGap={24}
					flexDirection={{ base: 'column', md: 'row' }}
				>
					<Box width={{ base: '100%', md: '50%' }}>
						<Image
							src='/about_team.png'
							alt='Image of the owners of Vibes DIY Studio'
							flexGrow={1}
							flexShrink={1}
							marginBottom={{ base: 8, md: 0 }}
							height='auto'
						/>
					</Box>
					<Box width={{ base: '100%', md: '50%' }}>
						<Title h2>About Vibes DIY Studio</Title>
						<Text lineHeight='7'>
							Las Vegas doesn’t have many creative spaces in the
							northwest valley for the next generation. What
							started as a prayer for the family to find a
							creative space to bring our business ideas to life.
							We took our love for diy projects, fashion, pop
							culture, and creative outlets to birth “Vibes Diy
							Studio.”
						</Text>
						<Text lineHeight='7'>
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
						<Title h3>Our Story</Title>
						<Text lineHeight='7'>
							Like lots of others during the 2020 pandemic
							Marybeth experienced many positives and some
							negatives in her life. After many years and longer
							days working remote at a desk and in front of the
							computer, lots of medical testing, she learned
							sitting 8+ hours a day until retirement was not
							going to be any good for her. Marybeth decided that
							in 2022 she was going to set a goal and depend on
							prayer to guide her to do something different. She
							gets a creative itch regularly and wanted to do some
							type of DIY projects. She always thought if she
							could do what she wanted and be happy she would be
							able to create and see others happy as well.
						</Text>
						<Text lineHeight='7'>
							Once deciding to take the leap of faith and
							brainstorming with her daughter they came up with
							Vibes. What better to have a creative space for
							people to come and be happy and express their
							creative vibe. Her daughter Cooper and her husband
							CJ are creatives themselves. Between{' '}
							<Link href='https://kenzierae.shop/'>
								Kenzie Rae
							</Link>{' '}
							and being able to create together has been a joy.
							Anything for the grand babies, as you may see them
							growing up in the studio. Can’t wait to see all our
							friends and family come through and all of you we
							don’t even know yet. Cheers to 2023. Happy New Year.
						</Text>
					</Box>
				</Flex>
			</Section>
		</PageTemplate>
	);
};

export default About;
