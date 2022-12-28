import { Text } from '@chakra-ui/react';
import { squareLink } from '../../utils/navLinks';
import Button from '../Button';
import Section from '../Section';
import Title from '../Title';
import styles from './BookNow.module.scss';

export interface IBookNowProps {
	title: string;
	description?: string;
}

const BookNow = ({ title, description }: IBookNowProps) => {
	return (
		<Section bgImage='/book_bg.png' containerClass={styles.BookNow}>
			<Title textAlign='center' color='white' h2>
				{title}
			</Title>
			{description && (
				<Text
					textAlign='center'
					marginBottom={4}
					fontSize={24}
					color='white'
				>
					{description}
				</Text>
			)}
			<Button variant='white' href={squareLink} target='_blank'>
				Book Now
			</Button>
		</Section>
	);
};

export default BookNow;
