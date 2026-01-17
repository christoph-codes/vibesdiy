import Section from "../components/Section";
import Title from "../components/Title";
import Logo from "../components/Logo";
import PageTemplate from "../templates/Page";
import NavLink from "../components/NavLink";
import Button from "../components/Button";
import { Flex } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { navigationLinks } from "../utils/navLinks";

const Components = () => {
	return (
		<>
			<PageTemplate>
				<Title h4>Navigation</Title>
				<Navigation links={navigationLinks} />
				<Section>
					<Title h4>Button</Title>
					<Flex>
						<Button>Hello</Button>
						<Button variant="primary-outline">Hello</Button>
						<Button variant="secondary">Hello</Button>
						<Button variant="secondary-outline">Hello</Button>
						<Button variant="tertiary">Hello</Button>
						<Button variant="tertiary-outline">Hello</Button>
						<Button variant="quad">Hello</Button>
						<Button variant="quad-outline">Hello</Button>
						<Button variant="black">Hello</Button>
						<Button variant="white">Hello</Button>
					</Flex>
					<Title h4>Logo</Title>
					<Flex alignItems="center" columnGap="5">
						<Logo />
						<Logo variant="noTag" />
						<Logo variant="light" />
						<Logo variant="lightNoTag" />
						<Logo variant="icon" />
					</Flex>
					<Title h4>NavLink</Title>
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
					<Title h4>Title</Title>

					<Title h1 eyebrow="primary" textAlign="left">
						Hey Gurl, Whats Up
					</Title>
					<Title h2 eyebrow="secondary" textAlign="center">
						Hey Gurl, Whats Up
					</Title>
					<Title h3 eyebrow="tertiary" textAlign="center">
						Hey Gurl, Whats Up
					</Title>
				</Section>
			</PageTemplate>
		</>
	);
};

export default Components;
