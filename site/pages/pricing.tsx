import { Image, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import PageTemplate from "../templates/Page";

const Pricing = () => {
	return (
		<PageTemplate
			metaTitle="Pricing for Vibes DIY Studio"
			metaDescription="The complete price list for Vibes DIY Studio"
		>
			<Hero title="Price List" bgImg="/about_bg.png" />
			<Section>
				<Text textAlign="center">
					Our pricing structure is updated regularaly and showcases
					all of prices of the items purchased with our services.
				</Text>
				<Image
					marginTop="48px"
					width="100%"
					src="/business_sale.png"
					alt="Vibes DIY Pricelist"
				/>
				<Image
					width="100%"
					src="/pricelist.png"
					alt="Vibes DIY Pricelist"
				/>
			</Section>
		</PageTemplate>
	);
};

export default Pricing;
