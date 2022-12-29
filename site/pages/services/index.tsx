import { Box, Flex, Image, Text } from '@chakra-ui/react';
import BookNow from '../../components/BookNow';
import Button from '../../components/Button';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Title from '../../components/Title';
import PageTemplate from '../../templates/Page';
import styles from './Services.module.scss';

const Services = () => {
	return (
		<PageTemplate
			metaTitle='Services » Vibes DIY Studio'
			metaDescription='Services offered by Vibes DIY Studio include creative paint pouring, custom ceramic pot painting, and rug tufting. Get in touch with us today!'
			className={styles.Services}
		>
			<Hero bgImg='/service_bg.png' title='DIY Services' />
			<Section containerClass={`${styles.Services__service}`}>
				<Flex
					justifyContent='space-around'
					alignItems='center'
					columnGap={{ base: '64px', md: '128px' }}
					flexDirection={{ base: 'column', md: 'row' }}
				>
					<Image
						src='/service_paint_pouring.png'
						alt='Paint Pouring Kaw Bear Figurines'
					/>
					<Box marginTop={{ base: 8, md: 0 }}>
						<Title h2 eyebrow='primary'>
							Paint Pouring
						</Title>
						<Text>
							The paint pouring experience gives you, the artist,
							a unique, relaxing session using all the colors you
							can think of. With over 20+ figures of popular
							fashion and cartoon art pieces, pick your figurine
							and get to pouring!
						</Text>
						<Button href='/services/paint-pour'>Learn More</Button>
					</Box>
				</Flex>
			</Section>
			<Section
				// paddingTop={0}
				containerClass={`${styles.Services__service}`}
			>
				<Flex
					justifyContent='space-around'
					alignItems='center'
					columnGap={{ base: '64px', md: '128px' }}
					flexDirection={{ base: 'column-reverse', md: 'row' }}
				>
					<Box marginBottom={{ base: 8, md: 0 }}>
						<Title h2 eyebrow='black'>
							Hand Painting
						</Title>
						<Text>
							The hand painting experience gives you the brush to
							customize cement art pieces from popular brands or
							figurines that make perfect pairings for coffee
							tables to display proudly or wherever you choose.
							Pick your piece and get to painting!
						</Text>
						<Button
							variant='black'
							href='/services/ceramic-painting'
						>
							Learn More
						</Button>
					</Box>
					<Image
						src='/service_ceramic_painting.png'
						alt='Painting a Ceramic Pot on a table'
					/>
				</Flex>
			</Section>
			<Section
				// paddingTop={0}
				containerClass={`${styles.Services__service}`}
			>
				<Flex
					justifyContent='space-around'
					alignItems='center'
					columnGap={{ base: '64px', md: '128px' }}
					flexDirection={{ base: 'column', md: 'row' }}
				>
					<Image
						src='/service_rug_tufting.png'
						alt='Painting a Ceramic Pot on a table'
					/>
					<Box marginTop={{ base: 8, md: 0 }}>
						<Title h2 eyebrow='secondary'>
							Rug Tufting
						</Title>
						<Text>
							Popular all over TikTok, the rug tufting experience
							gives you all the tools to create a one of one
							creation that you can pride yourself in taking home.
							You`ll be given a simple tutorial on how to create
							your own rug with over 90 different color options.
							Pick your yarn and get to tufting!
						</Text>
						<Button
							variant='secondary'
							href='/services/rug-tufting'
						>
							Learn More
						</Button>
					</Box>
				</Flex>
			</Section>
			<BookNow
				title='Love it all?'
				description='Pick one of the services above and pay to lock in your spot to come in to experience your next creation.'
			/>
		</PageTemplate>
	);
};

export default Services;
