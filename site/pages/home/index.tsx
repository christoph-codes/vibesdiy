import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import FlexCard from '../../components/FlexCard';
import Hero from '../../components/Hero';
import InstagramFeed from '../../components/InstagramFeed';
import Section from '../../components/Section';
import Title from '../../components/Title';
import PageTemplate from '../../templates/Page';
import homeFaqs from '../../utils/content/homeFaqs';
import styles from './Home.module.scss';

const Home = ({ posts }) => {
	return (
		<PageTemplate className={styles.Home}>
			<Hero
				className={styles.Home__hero}
				home
				bgImg='/bg.png'
				containerClass={styles.Home__heroContainer}
				borderBottomColor='brand.black.default'
				borderBottomWidth={6}
				borderBottomStyle='solid'
				title='DIY in Style'
			>
				<Text marginBottom={4} fontSize={24} color='white'>
					Let your creativity flow through your fingertips. For Proof
					Only.
				</Text>
				<Button href='/book-now' variant='white'>
					Book Now
				</Button>
			</Hero>
			<Section marginTop={{ base: '-30px', md: '-60px' }} paddingTop={0}>
				<Flex
					justifyContent='center'
					columnGap={{ base: 0, sm: '6', md: '12' }}
					flexDirection={{ base: 'column', sm: 'row' }}
				>
					<FlexCard cardColor='brand.primary.default'>
						Paint Pouring
					</FlexCard>
					<FlexCard cardColor='brand.black.default'>
						Hand Painting
					</FlexCard>
					<FlexCard cardColor='brand.secondary.default'>
						Rug Tufting
					</FlexCard>
				</Flex>
			</Section>
			<Section
				textAlign='center'
				containerClass={styles.Home__located}
				paddingTop={0}
			>
				<Title h2 textAlign='center'>
					The Premiere Creative Space
				</Title>
				<Text fontSize='xl' marginBottom={4}>
					Located in Something Something Shopping Center.
					<br />
					<Link
						className='LINK'
						href='https://goo.gl/maps/Lr47ZATSsNbsaMXf6'
					>
						7557 Norman Rockwell Ln, Bldg 2 Suite 120
					</Link>
				</Text>
				<Button href='/location'>Come Visit Us</Button>
			</Section>
			<Section
				bgColor='brand.quad.light'
				containerClass={styles.Home__featured}
			>
				<Flex
					justifyContent='space-around'
					alignItems='center'
					columnGap='64px'
					flexDirection={{ base: 'column', sm: 'row' }}
				>
					<Box width='100%' marginBottom={{ base: 8, md: 0 }}>
						<Image src='/product_features.png' alt='Paint Pour' />
					</Box>
					<Box width='100%'>
						<Title
							color='brand.quad.default'
							h3
							textAlign={{ base: 'center', md: 'left' }}
						>{`Let's Get Creating`}</Title>
						<Text>
							{`Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.`}
						</Text>
						<Text>
							{`It has survived not only five centuries, but also
							the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the
							1960s with the release of Letraset sheets containing
							Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.`}
						</Text>
						<Button>Learn More</Button>
					</Box>
				</Flex>
			</Section>
			<Section bgImage='/book_bg.png' containerClass={styles.Home__book}>
				<Title textAlign='center' color='white' h2>
					Book Session Today!
				</Title>
				<Text marginBottom={4} fontSize={24} color='white'>
					If you are the spontaneous type, stop in today and book a
					last minute session to spark your creativity today.
				</Text>
				<Button variant='white'>Book Now</Button>
			</Section>
			{/** FAQs */}
			<Section containerClass={styles.Home__faq}>
				<Title textAlign='center' marginBottom={4}>
					FAQs
				</Title>
				<Accordion items={homeFaqs} />
			</Section>
			{/** Instagram */}
			<Section paddingTop={{ base: 0, md: '64px' }}>
				<Title textAlign='center' marginBottom={8}>
					Follow Us On Instagram
				</Title>
				<InstagramFeed />
			</Section>
		</PageTemplate>
	);
};

export default Home;

// TODO: Create custom feed when available
// <InstagramFeed posts={posts} />
// export const getStaticProps = async () => {
// 	// console.log('YYOOOOO', process.env.NEXT_APP_INSTAGRAM_KEY);

// 	const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,thumbnail_url&access_token=${process.env.NEXT_APP_INSTAGRAM_KEY}`;
// 	const data = await fetch(url);
// 	const posts = await data.json();

// 	const limited = posts.data.filter((item) => {
// 		console.log('TYPE:', item.media_type);
// 		return item.media_type === 'IMAGE';
// 	});

// 	return {
// 		props: {
// 			posts: limited.slice(0, 8),
// 		},
// 	};
// };
