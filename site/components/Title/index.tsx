import { Box, Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type TEyebrow =
	| "primary"
	| "secondary"
	| "tertiary"
	| "quad"
	| "black"
	| "white";

const headerSize = {
	h1: "4xl",
	h2: "3xl",
	h3: "2xl",
	h4: "xl",
	h5: "lg",
	h6: "md",
};

export interface ITitleProps extends HeadingProps {
	children: ReactNode;
	eyebrow?: TEyebrow | false;
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
	h4?: boolean;
	h5?: boolean;
	h6?: boolean;
	textAlign?: "center" | "left";
	className?: string;
}

const Title = ({
	children,
	eyebrow,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	textAlign = "left",
	className,
	...rest
}: ITitleProps) => {
	const chosenHeader = h1
		? "h1"
		: h2
		? "h2"
		: h3
		? "h3"
		: h4
		? "h4"
		: h5
		? "h5"
		: h6
		? "h6"
		: "h1";
	return (
		<Box marginBottom={4} className={className || ""}>
			{eyebrow && (chosenHeader === "h1" || chosenHeader === "h2") && (
				<Box
					bg={`brand.${eyebrow}.default`}
					width="72px"
					height={2}
					marginBottom={2}
					borderRadius={8}
					marginX={textAlign === "center" && "auto"}
				/>
			)}
			<Heading
				color="brand.black.default"
				as={chosenHeader}
				size={headerSize[chosenHeader]}
				textAlign={textAlign}
				{...rest}
			>
				{children}
			</Heading>
		</Box>
	);
};

export default Title;
