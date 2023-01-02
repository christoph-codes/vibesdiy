import Script from 'next/script';
import Section from '../../components/Section';
import PageTemplate from '../../templates/Page';
import styles from './Book.module.scss';

const Book = () => {
	return (
		<>
			<PageTemplate metaTitle='Book A Session with Vibes DIY Studio Today'>
				<Section
					title='Book A Session Today'
					containerClass={styles.Book__container}
				>
					<iframe
						src='https://app.squarespacescheduling.com/schedule.php?owner=28028184'
						title='Schedule Appointment'
						width='100%'
						height='100%'
						seamless
					></iframe>
					<Script
						src='https://embed.acuityscheduling.com/js/embed.js'
						type='text/javascript'
					/>
				</Section>
			</PageTemplate>
		</>
	);
};

export default Book;
