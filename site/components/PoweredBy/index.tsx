import { Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import Container from '../Container';
import styles from './PoweredBy.module.scss';

const PoweredBy = () => {
	return (
		<Flex
			className={styles.PoweredBy}
			bgColor='brand.black.default'
			justifyContent='center'
			alignItems='center'
			textAlign='center'
			paddingBottom={2}
		>
			<Container
				borderColor='brand.black.hover'
				borderTop='1px solid'
				paddingTop={2}
			>
				<Text color='brand.white.hover' marginBottom={0}>
					Site made with{' '}
					<Icon marginBottom='-3px' as={FaHeart} color='#e1ff00' /> by{' '}
					<Text
						whiteSpace='nowrap'
						as={Link}
						fontSize='md'
						color='#e1ff00'
						target='_blank'
						href='https://thekirkconcept.com?campaign=Vibes'
						margin={0}
					>
						The Kirk Concept
					</Text>
				</Text>
			</Container>
		</Flex>
	);
};

export default PoweredBy;
