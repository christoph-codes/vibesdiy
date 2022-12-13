import { FC, ReactElement } from "react";
import styles from "./Button.module.scss";

export type TButtonProps = {
	className?: string;
	children?: ReactElement | string;
	variant?:
		| "primary"
		| "primary-outline"
		| "secondary"
		| "secondary-outline"
		| "tertiary"
		| "tertiary-outline"
		| "quad"
		| "quad-outline"
		| "white"
		| "black";
	href?: "string";
	fullWidth?: boolean;
	rest?: any[];
};

const Button: FC<TButtonProps> = ({
	children,
	className,
	variant = "primary",
	fullWidth,
	href,
	...rest
}) => {
	const Tag: "a" | "button" = href ? "a" : "button";
	return (
		<Tag
			type={!href ? "button" : undefined}
			href={href}
			className={`${styles.Button} ${className} ${
				variant ? styles[`Button__${variant}`] : ""
			} ${fullWidth ? styles.Button__fullWidth : ""}`}
			{...rest}
		>
			{children}
		</Tag>
	);
};

export default Button;
