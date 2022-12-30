import { Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import styles from './PoweredBy.module.scss';

const PoweredBy = () => {
	return (
		<Flex
			className={styles.PoweredBy}
			bgColor='brand.black.hover'
			justifyContent='center'
			alignItems='center'
			textAlign='center'
			paddingY={2}
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
		</Flex>
	);
};

export default PoweredBy;
