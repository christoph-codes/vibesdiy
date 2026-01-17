import { Text } from '@chakra-ui/react';
import Head from 'next/head';
import Logo from '../components/Logo';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Vibes DIY Studio</title>
				<meta
					name='description'
					content='Vibes DIY Studio » The new creative place coming to Centennial Hills in Las Vegas'
				/>
				<meta content='/vibes_seo.png' property='og:image' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.ComingSoon}>
				<article>
					<h1>Vibes DIY</h1>
					<Logo variant='white' />
					<Text textColor='brand.white.default'>
						Website Coming Soon
					</Text>
				</article>
			</main>
		</div>
	);
}
