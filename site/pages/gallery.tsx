import { Flex, Image, Text } from '@chakra-ui/react';
import BookNow from '../components/BookNow';
import Eyebrow from '../components/Eyebrow';
import Hero from '../components/Hero';
import Section from '../components/Section';
import PageTemplate from '../templates/Page';

const Gallery = () => {
	const imageList = [
		'/gallery/gallery_1.jpg',
		'/gallery/gallery_2.jpg',
		'/gallery/gallery_3.jpg',
		'/gallery/gallery_4.jpg',
		'/gallery/gallery_5.jpg',
		'/gallery/gallery_6.jpg',
		'/gallery/gallery_7.jpg',
		'/gallery/gallery_8.jpg',
		'/gallery/gallery_9.jpg',
		'/gallery/gallery_10.jpg',
		'/gallery/gallery_11.jpg',
	];
	const borderColor = [
		'brand.primary.default',
		'brand.secondary.default',
		'brand.tertiary.default',
		'brand.quad.default',
		'brand.black.default',
	];
	const ratios = ['60%', '30%', '30%'];
	return (
		<PageTemplate
			metaTitle='Gallery » Vibes DIY Studio'
			metaDescription='Check out our gallery of the Vibes DIY Studio experience along with real people and their amazing creations.'
		>
			<Hero title='Gallery' bgImg='/gallery_bg.png' />
			<Section>
				<Eyebrow color='primary' align='center' />
				<Text textAlign='center'>
					View our amazing collection of photos that showcase the
					amazing works of art created by us and our customers!
				</Text>
			</Section>
			<Section paddingTop={0}>
				<Flex gap='24px' gridColumn={4} flexWrap='wrap'>
					{imageList.map((image, index) => {
						console.log(ratios[index]);
						return (
							<Image
								key={index}
								src={image}
								alt='Gallery Image'
								borderRadius='16px'
								borderWidth={4}
								borderStyle='solid'
								borderColor={borderColor[index % 5]}
								objectFit='cover'
								flexGrow={1}
								flexShrink={0}
								flexBasis={{
									base: '100%',
									md: ratios[index % 3],
								}}
								display='inline-block'
							/>
						);
					})}
				</Flex>
			</Section>
			<BookNow
				title='Like What You See?'
				description='Your creativity starts here. Schedule a time for paint pouring, hand painting or rug tufting today!'
			/>
		</PageTemplate>
	);
};

export default Gallery;
