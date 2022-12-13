import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import "../styles/globals.scss";
import SideNavProvider from "../providers/SidenavProvider";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<SideNavProvider>
				<Component {...pageProps} />
			</SideNavProvider>
		</ChakraProvider>
	);
};

export default App;
