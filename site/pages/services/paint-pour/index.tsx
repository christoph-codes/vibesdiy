import { Flex, Text, Box, Image } from '@chakra-ui/react';
import Accordion from '../../../components/Accordion';
import BookNow from '../../../components/BookNow';
import Button from '../../../components/Button';
import Hero from '../../../components/Hero';
import Review from '../../../components/Review';
import Section from '../../../components/Section';
import Title from '../../../components/Title';
import PageTemplate from '../../../templates/Page';
import homeFaqs from '../../../utils/content/homeFaqs';
import { squareLink } from '../../../utils/navLinks';
import styles from './PaintPouring.module.scss';

const PaintPouring = () => {
	return (
		<PageTemplate
			metaTitle='Paint Pouring » Vibes DIY Studio'
			metaDescription='The paint pouring experience gives you, the artist, a unique, relaxing session using all the colors you can think of.'
		>
			<Hero title='Paint Pouring' bgImg='/paint_pour_bg.png' />
			<Section>
				<Flex
					justifyContent='space-between'
					alignItems='center'
					gap={{ base: 8, md: 16 }}
					flexDirection={{ base: 'column', md: 'row' }}
				>
					<Box textAlign='center' paddingX='32px'>
						<Title h3 eyebrow='primary' textAlign='center'>
							Easy to do
						</Title>
						<Text>
							No two paint pour projects look the same. You may
							use the same colors as the person next to you but
							your own take and perspective will make them one of
							a kind.
						</Text>
					</Box>
					<Box textAlign='center' paddingX='32px'>
						<Title h3 eyebrow='primary' textAlign='center'>
							Completely Unique
						</Title>
						<Text>
							No two paint pour projects look the same. You may
							use the same colors as the person next to you but
							your own take and perspective will make them one of
							a kind.
						</Text>
					</Box>
				</Flex>
				<Flex marginTop={{ base: 2, md: 8 }} justifyContent='center'>
					<Button href={squareLink}>Book Now</Button>
				</Flex>
			</Section>
			<Section
				containerClass={styles.PaintPouring__gallery}
				paddingTop={0}
			>
				<Flex
					gap={6}
					flexDirection={{ base: 'column', md: 'row' }}
					marginBottom={8}
				>
					<Image
						src='/service_paint_pouring.png'
						alt='Paint Pouring is amazing'
					/>
					<Image
						src='/service_paint_pouring.png'
						alt='Paint Pouring is amazing'
					/>
					<Image
						src='/service_paint_pouring.png'
						alt='Paint Pouring is amazing'
					/>
				</Flex>
				<Button href='/gallery' variant='primary-outline'>
					View Full Gallery
				</Button>
			</Section>
			{/* Review Block */}
			<Review
				theme='primary'
				review='The most fun I’ve had in a long time. I’m inviting all my girls and
were going back!'
				author='Tina S.'
				headshot='/tinas_headshot_review.png'
			/>
			<Section title='FAQs'>
				<Accordion items={homeFaqs} />
			</Section>
			<BookNow
				title='Book Your Paint Pouring Session Today!'
				description='With over 20+ figures of popular
							fashion and cartoon art pieces, pick your figurine
							and get to pouring!'
			/>
		</PageTemplate>
	);
};

export default PaintPouring;
