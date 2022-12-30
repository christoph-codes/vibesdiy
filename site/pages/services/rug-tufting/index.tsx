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
import { bookLink } from '../../../utils/navLinks';
import styles from './RugTufting.module.scss';

const RugTufting = () => {
	return (
		<PageTemplate
			metaTitle='Rug Tufting » Vibes DIY Studio'
			metaDescription='Popular all over TikTok, the rug tufting experience gives you all the tools to create a one of one creation that you can pride yourself in taking home.'
		>
			<Hero title='Rug Tufting' bgImg='/rug_tufting_bg.png' />
			<Section>
				<Flex
					justifyContent='space-between'
					alignItems='center'
					gap={{ base: 8, md: 16 }}
					flexDirection={{ base: 'column', md: 'row' }}
				>
					<Box textAlign='center' paddingX='32px'>
						<Title h3 eyebrow='secondary' textAlign='center'>
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
						<Title h3 eyebrow='secondary' textAlign='center'>
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
					<Button href={bookLink} variant='secondary'>
						Book Now
					</Button>
				</Flex>
			</Section>
			<Section containerClass={styles.RugTufting__gallery} paddingTop={0}>
				<Flex flexDir='column' alignItems='center'>
					<Flex
						gap={6}
						flexDirection={{ base: 'column', md: 'row' }}
						marginBottom={8}
					>
						<Image
							src='/service_rug_tufting.png'
							alt='Rug Tufting is amazing'
						/>
						<Image
							src='/service_rug_tufting.png'
							alt='Rug Tufting is amazing'
						/>
						<Image
							src='/service_rug_tufting.png'
							alt='Rug Tufting is amazing'
						/>
					</Flex>
					<Button href='/gallery' variant='secondary-outline'>
						View Full Gallery
					</Button>
				</Flex>
			</Section>
			{/* Review Block */}
			<Review
				theme='secondary'
				review='The most fun I’ve had in a long time. I’m inviting all my girls and
were going back!'
				author='Tina S.'
				headshot='/tinas_headshot_review.png'
			/>
			<Section title='FAQs'>
				<Accordion items={homeFaqs} theme='secondary' />
			</Section>
			<BookNow
				title='Book Your Rug Tufting Session Today!'
				description='You`ll be given a simple tutorial on how to create your own rug with over 90 different color options. Pick your yarn and get to tufting!'
			/>
		</PageTemplate>
	);
};

export default RugTufting;
