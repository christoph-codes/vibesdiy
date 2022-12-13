import Link, { LinkProps } from "next/link";
import { Box, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./NavLink.module.scss";
import { ReactNode, useState } from "react";

export interface Link {
	label: string;
	path: LinkProps["href"];
}

export interface INavLinkProps {
	href?: string;
	className?: string;
	children: ReactNode | string;
	dropdownLinks?: Link[];
}

const NavLink = ({
	href,
	className,
	dropdownLinks,
	children,
}: INavLinkProps) => {
	const [active, setActive] = useState(false);
	const doDropdownsExist: boolean = dropdownLinks?.length > 0;
	const SubNavigationLink = ({ label, path }) => {
		return (
			<Link className={`${styles.NavLinkSub} ${className}`} href={path}>
				<Text as="span">{label}</Text>
			</Link>
		);
	};
	return (
		<>
			<Link
				onMouseEnter={() => {
					setActive(true);
				}}
				onMouseOut={() => {
					setActive(false);
				}}
				className={`${styles.NavLink} ${className} ${
					active && doDropdownsExist ? styles.NavLinkActive : ""
				}`}
				href={href || "#"}
			>
				<Text as="span">
					{children}
					{doDropdownsExist && <ChevronDownIcon />}
				</Text>
			</Link>
			{doDropdownsExist && (
				<Box
					className={styles.NavLink__dropdown}
					onMouseLeave={() => setActive(false)}
				>
					{dropdownLinks.map((link, index) => {
						return (
							<SubNavigationLink
								key={index}
								label={link.label}
								path={link.path}
							/>
						);
					})}
				</Box>
			)}
		</>
	);
};

export default NavLink;
