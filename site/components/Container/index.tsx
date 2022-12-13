import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IContainer {
	className?: string;
	children?: ReactNode;
}

const Container = ({ children, className }: IContainer) => {
	return (
		<Box
			className={className || ""}
			maxWidth="1200px"
			width="100%"
			marginX="auto"
			paddingX="8px"
		>
			{children}
		</Box>
	);
};

export default Container;
