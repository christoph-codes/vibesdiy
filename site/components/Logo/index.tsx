import Image from "next/image";
import styles from "./Logo.module.scss";

export interface ILogoProps {
	className?: string;
	variant?: "primary" | "noTag" | "light" | "lightNoTag" | "white" | "icon";
}

const Logo = ({ variant = "primary", className }: ILogoProps) => {
	const getLogo = {
		primary: "/vibes_logo.svg",
		noTag: "/vibes_logo_noTag.svg",
		light: "/vibes_light_logo.svg",
		lightNoTag: "/vibes_light_logo_noTag.svg",
		white: "/logo_white.svg",
		icon: "/icon.svg",
	};
	return (
		<Image
			alt="Vibes DIY Logo"
			fill
			className={`${styles.Logo} ${className || ""}`}
			src={getLogo[variant]}
		/>
	);
};

export default Logo;
