import { Image, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import PageTemplate from "../templates/Page";

const Pricing = () => {
	return (
		<PageTemplate
			metaTitle="Pricing for Vibes DIY Studio"
			metaDescription="The complete price list for Vibes DIY Studio"
			metaImage="/business_sale.png"
		>
			<Hero title="Price List" bgImg="/about_bg.png" />
			<Section>
				<Text textAlign="center">
					Our pricing structure is updated regularly and showcases all of our
					prices of the items purchased with our services.
				</Text>
				<Image
					width="100%"
					src="/pricing_032224.png"
					alt="Vibes DIY Pricelist"
				/>
			</Section>
		</PageTemplate>
	);
};

export default Pricing;
