import {
	Image,
	Table,
	Flex,
	Box,
	Tr,
	Th,
	Thead,
	Tbody,
	Td,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Title from "../components/Title";
import PageTemplate from "../templates/Page";

const Pricing = () => {
	return (
		<PageTemplate>
			<Hero bgImg="/bg.png" title="Pricing" />
			<Section>
				<Title h3>Painting</Title>
				<Table variant="striped" colorScheme="brand.quad.light">
					<Thead>
						<Tr>
							<Th>Fluid Bears</Th>
							<Th>Retail</Th>
							<Th>Discount</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>Keychain</Td>
							<Td>$12</Td>
							<Td>X</Td>
						</Tr>
						<Tr>
							<Td>Small</Td>
							<Td>$48</Td>
							<Td>$38</Td>
						</Tr>
						<Tr>
							<Td>Medium</Td>
							<Td>$73</Td>
							<Td>$58</Td>
						</Tr>
						<Tr>
							<Td>Large</Td>
							<Td>$85</Td>
							<Td>$68</Td>
						</Tr>
						<Tr>
							<Td>XL</Td>
							<Td>$185</Td>
							<Td>$148</Td>
						</Tr>
						<Tr>
							<Td>Medium</Td>
							<Td>$73</Td>
							<Td>$58</Td>
						</Tr>
						<Tr>
							<Td>Medium</Td>
							<Td>$73</Td>
							<Td>$58</Td>
						</Tr>
					</Tbody>
				</Table>
				<Table variant="striped" colorScheme="brand.quad.light">
					<Tbody>
						<Tr>
							<Td>Balloon Dogs</Td>
							<Td>$63</Td>
							<Td>$50</Td>
						</Tr>
					</Tbody>
				</Table>
			</Section>
		</PageTemplate>
	);
};

export default Pricing;
