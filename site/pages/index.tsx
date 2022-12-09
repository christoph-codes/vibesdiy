import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Vibes DIY Studio</title>
				<meta
					name="description"
					content="Vibes DIY Studio » The new creative place coming to Centennial Hills in Las Vegas"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.ComingSoon}>
				<article>
					<h1>Vibes DIY</h1>
					<Image
						width={500}
						height={200}
						src="/logo_white.svg"
						alt="Vibes DIY Studio Logo"
					/>
					<p>Website Coming Soon</p>
				</article>
			</main>
		</div>
	);
}
