import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Title from "../Title";
import styles from "./FlexCard.module.scss";

export interface IFlexCardProps {
	link?: string;
	bgImage?: string;
	cardColor?: string;
	children?: string;
}

const FlexCard = ({ link, bgImage, cardColor, children }: IFlexCardProps) => {
	return (
		<Link className={styles.FlexCard__link} href={link || "#"}>
			<Box
				className={styles.FlexCard}
				as="article"
				bgImage={bgImage || "/paint_pour_flex_card.png"}
				backgroundSize="cover"
				backgroundPosition="center"
				borderRadius={8}
				width="100%"
			>
				{children && (
					<Box
						padding="4"
						bgColor={cardColor}
						marginBottom={0}
						borderBottomLeftRadius={8}
						borderBottomRightRadius={8}
					>
						<Title
							textAlign="center"
							h6
							marginBottom={0}
							color="white"
						>
							{children}
						</Title>
					</Box>
				)}
			</Box>
		</Link>
	);
};

export default FlexCard;
