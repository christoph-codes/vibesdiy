import Section from "../components/Section";
import Title from "../components/Title";
import Logo from "../components/Logo";
import PageTemplate from "../templates/Page";

const Components = () => {
	return (
		<>
			<PageTemplate>
				<Section>
					<Logo />
					<Logo variant="noTag" />
					<Logo variant="light" />
					<Logo variant="lightNoTag" />
					<Logo variant="icon" />
					<Title header="h1" eyebrow="primary" textAlign="left">
						Hey Gurl, Whats Up
					</Title>
					<Title header="h2" eyebrow="secondary" textAlign="center">
						Hey Gurl, Whats Up
					</Title>
					<Title header="h3" eyebrow="tertiary" textAlign="center">
						Hey Gurl, Whats Up
					</Title>
				</Section>
			</PageTemplate>
		</>
	);
};

export default Components;
