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
	header: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	textAlign?: "center" | "left";
}

const Title = ({
	children,
	eyebrow,
	header = "h1",
	textAlign = "left",
	...rest
}: ITitleProps) => {
	return (
		<div>
			{eyebrow && header === "h2" && (
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
				as={header}
				size={headerSize[header]}
				textAlign={textAlign}
				{...rest}
			>
				{children}
			</Heading>
		</div>
	);
};

export default Title;
