import Section from "../components/Section";
import Title from "../components/Title";
import Logo from "../components/Logo";
import PageTemplate from "../templates/Page";
import NavLink from "../components/NavLink";

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
					<NavLink
						dropdownLinks={[
							{ label: "Hello", path: "/hello" },
							{ label: "Hello2", path: "/hello2" },
						]}
					>
						Page
					</NavLink>
					<NavLink href="">Page 2</NavLink>
					<NavLink href="/three">Page 3</NavLink>
					<NavLink href="/four">Page 4</NavLink>
					<NavLink href="/five">Page 5</NavLink>
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
