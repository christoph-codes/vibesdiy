import "../styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	const vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty("--vh", `${vh}px`);
	return <Component {...pageProps} />;
}
