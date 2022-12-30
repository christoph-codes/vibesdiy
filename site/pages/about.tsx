import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Title from '../components/Title';
import PageTemplate from '../templates/Page';

const About = () => {
	return (
		<PageTemplate
			metaTitle='About'
			metaDescription='Learn About Vibes DIY Studio and how they came to be in the top creative studio in Las Vegas'
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
							src='/vibes_seo.png'
							alt='Image of the owners of Vibes DIY Studio'
							flexGrow={1}
							flexShrink={1}
							marginBottom={{ base: 8, md: 0 }}
							height='auto'
						/>
						<Text color='red' fontWeight='bold'>
							Replace with actual image
						</Text>
					</Box>
					<Box width={{ base: '100%', md: '50%' }}>
						<Title h2>About Vibes DIY Studio</Title>
						<Text>
							{`Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially
							unchanged. It was popularised in the 1960s with the
							release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of
							Lorem Ipsum.`}
						</Text>
						<Title h3>History</Title>
						<Text>
							{`It is a long established fact that a reader will be
							distracted by the readable content of a page when
							looking at its layout. The point of using Lorem
							Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using
							'Content here, content here', making it look like
							readable English. Many desktop publishing packages
							and web page editors now use Lorem Ipsum as their
							default model text, and a search for 'lorem ipsum'
							will uncover many web sites still in their infancy.
							Various versions have evolved over the years,
							sometimes by accident, sometimes on purpose
							(injected humour and the like).`}
						</Text>
						<Title h3>Our Vision</Title>
						<Text>
							{`Contrary to popular belief, Lorem Ipsum is not
							simply random text. It has roots in a piece of
							classical Latin literature from 45 BC, making it
							over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia,
							looked up one of the more obscure Latin words,
							consectetur, from a Lorem Ipsum passage, and going
							through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem
							Ipsum comes from sections 1.10.32 and 1.10.33 of "de
							Finibus Bonorum et Malorum" (The Extremes of Good
							and Evil) by Cicero, written in 45 BC. This book is
							a treatise on the theory of ethics, very popular
							during the Renaissance. The first line of Lorem
							Ipsum, "Lorem ipsum dolor sit amet..", comes from a
							line in section 1.10.32.`}
						</Text>
					</Box>
				</Flex>
			</Section>
		</PageTemplate>
	);
};

export default About;
