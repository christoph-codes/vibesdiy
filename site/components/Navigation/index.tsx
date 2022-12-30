import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useSideNav } from '../../providers/SidenavProvider';
import { bookLink } from '../../utils/navLinks';
import Container from '../Container';
import Logo from '../Logo';
import NavLink, { INavLinkProps, ILink } from '../NavLink';
import styles from './Navigation.module.scss';

export interface INavigationProps {
	className?: string;
	links?: {
		link: ILink;
		dropdown?: INavLinkProps['dropdownLinks'];
		cta?: boolean;
	}[];
}

const Navigation = ({ links, className }: INavigationProps) => {
	const { toggleSideNav } = useSideNav();
	return (
		<Box as='nav' className={`${styles.Navigation} ${className || ''}`}>
			<Container className={styles.Navigation__container}>
				<Link className={styles.Navigation__logoContainer} href='/'>
					<Logo className={styles.Navigation__logo} />
				</Link>
				<ul className={styles.Navigation__nav}>
					{links?.map((item, index) => {
						return (
							<NavLink
								key={index}
								dropdownLinks={item.dropdown}
								cta={item.cta}
								href={item.link.path}
								target={item.link.target}
							>
								{item.link.label}
							</NavLink>
						);
					})}
				</ul>
				<Box className={styles.Navigation__mobileNav}>
					<NavLink
						className={styles.Navigation__mobileCTA}
						href={bookLink}
						cta
					>
						Book Now
					</NavLink>
					<button
						className={`${styles.Navigation__hamburger}`}
						onClick={() => toggleSideNav()}
					>
						<HamburgerIcon boxSize={8} />
					</button>
				</Box>
			</Container>
		</Box>
	);
};

export default Navigation;
