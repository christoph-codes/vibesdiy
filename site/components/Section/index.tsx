import { Box, Text } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";
import Title from "../Title";
import styles from "./Section.module.scss";

export type ISectionProps = {
	children?: ReactNode;
	className?: string[];
	hideContainer?: boolean;
	bgColor?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "quad"
		| "black"
		| "grey"
		| "offwhite";
	bgImg?: StaticImageData;
	title?: string;
	description?: string;
	rest?: any[];
};

const Section: FC<ISectionProps> = ({
	children,
	className,
	hideContainer,
	bgColor,
	bgImg,
	title,
	description,
	...rest
}) => {
	const content = (
		<>
			{title && (
				<Title
					header="h2"
					eyebrow="primary"
					className={styles.Section__title}
				>
					{title}
				</Title>
			)}
			{description && (
				<Text className={styles.Section__description}>
					{description}
				</Text>
			)}
			{children}
		</>
	);
	return (
		<Box
			as="section"
			bgColor={bgColor || ""}
			className={`${styles.Section} ${className}`}
			paddingX={4}
			backgroundImage={
				bgImg && {
					backgroundImage: `url(${bgImg.src})`,
					backgroundColor: "unset",
				}
			}
			{...rest}
		>
			{!hideContainer ? (
				<Box maxWidth="1200px" width="100%" marginX="auto">
					{content}
				</Box>
			) : (
				content
			)}
		</Box>
	);
};
export default Section;
