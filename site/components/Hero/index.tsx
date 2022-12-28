import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Section from '../Section';
import Title from '../Title';
import styles from './Hero.module.scss';

export interface IHeroProps {
	children?: ReactNode;
	home?: boolean;
	bgImg?: string;
	className?: string;
	containerClass?: string;
	title: string;
}

const Hero = ({
	children,
	home,
	bgImg,
	className,
	containerClass,
	title,
	...rest
}: IHeroProps & BoxProps) => {
	return (
		<Box
			as={Section}
			className={`${styles.Hero} ${className || ''} ${
				home ? styles.Hero__home : ''
			}`}
			bgColor='brand.primary.default'
			bgImage={bgImg}
			containerClass={containerClass}
			{...rest}
		>
			<Title textAlign='center' color='white' textShadow='xl'>
				{title}
			</Title>
			{children}
		</Box>
	);
};

export default Hero;
