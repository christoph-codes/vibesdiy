import { Grid, GridItem, Image, Text } from '@chakra-ui/react';
import Eyebrow from '../components/Eyebrow';
import Hero from '../components/Hero';
import Section from '../components/Section';
import PageTemplate from '../templates/Page';

const Gallery = () => {
	const imageList = [
		'/service_rug_tufting.png',
		'/service_ceramic_painting.png',
		'/service_paint_pouring.png',
		'/service_rug_tufting.png',
		'/service_ceramic_painting.png',
		'/service_paint_pouring.png',
		'/service_rug_tufting.png',
		'/service_ceramic_painting.png',
		'/service_paint_pouring.png',
		'/service_rug_tufting.png',
		'/service_ceramic_painting.png',
		'/service_paint_pouring.png',
	];
	const borderColor = [
		'brand.primary.default',
		'brand.secondary.default',
		'brand.tertiary.default',
		'brand.quad.default',
		'brand.black.default',
	];
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
				<Grid
					gap='24px'
					gridColumn={3}
					templateColumns='repeat(3, 1fr)'
					flexWrap='wrap'
				>
					{imageList.map((image, index) => {
						return (
							<GridItem
								as={Image}
								colSpan={{
									base: 3,
									md: index % 3 === 0 ? 2 : 1,
								}}
								key={index}
								src={image}
								alt='Gallery Image'
								w='100%'
								borderRadius='16px'
								borderWidth={4}
								borderStyle='solid'
								borderColor={borderColor[index % 5]}
							/>
						);
					})}
				</Grid>
			</Section>
		</PageTemplate>
	);
};

export default Gallery;
