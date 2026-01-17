"use client";
import { ChakraProvider } from "@chakra-ui/react";
import SideNavProvider from "../providers/SidenavProvider";
import theme from "../styles/theme";

const Page = ({ children }) => (
  <html lang="en">
    <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	  })(window,document,'script','dataLayer','GTM-MF8WDH6');`,
        }}
      />
    </head>

    <body>
      <ChakraProvider theme={theme}>
        <SideNavProvider>{children}</SideNavProvider>
      </ChakraProvider>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MF8WDH6"
					height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    </body>
  </html>
);

export default Page;
