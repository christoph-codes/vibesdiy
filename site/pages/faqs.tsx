import Accordion from "../components/Accordion";
import Hero from "../components/Hero";
import Section from "../components/Section";
import PageTemplate from "../templates/Page";
import homeFaqs from "../utils/content/homeFaqs";

const Faqs = () => {
	return (
		<PageTemplate
			metaTitle="Frequently Asked Questions"
			metaDescription="Frequently Asked Quesitons for Vibes DIY Studio"
		>
			<Hero bgImage="/about1.jpg" title="FAQs" />
			<Section>
				<Accordion items={homeFaqs} theme="quad" />
			</Section>
		</PageTemplate>
	);
};

export default Faqs;
