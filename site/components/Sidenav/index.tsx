import { FC } from "react";
import Link from "next/link";
import { navigationLinks } from "../../utils/navLinks";
import styles from "./Sidenav.module.scss";
import { CloseIcon } from "@chakra-ui/icons";
import NavLink from "../NavLink";

export type TSideNav = {
	isOpen?: boolean;
	className?: string;
	toggleSideNav: () => void;
	rest?: any[];
};

const SideNav: FC<TSideNav> = ({
	isOpen,
	toggleSideNav,
	className,
	...rest
}) => (
	<aside
		className={`${styles.SideNav} ${className} ${
			isOpen ? styles.SideNav__isOpen : ""
		}`}
		{...rest}
	>
		<button
			className={styles.SideNav__close}
			type="button"
			onClick={() => toggleSideNav()}
		>
			<CloseIcon boxSize={8} color="currentColor" />
		</button>
		{navigationLinks?.map((item, index) => (
			<NavLink
				className={styles.SideNav__link}
				key={index}
				href={item.link.path}
				onClick={() => toggleSideNav()}
				cta={item.cta}
			>
				{item.link.label}
			</NavLink>
		))}
	</aside>
);

export default SideNav;
