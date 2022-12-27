import { ReactNode } from 'react';
import {
	Accordion as ChakraAccordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	StyleProps,
	AccordionProps,
	Box,
} from '@chakra-ui/react';
import styles from './Accordion.module.scss';

export interface IAccordionItem {
	title: string;
	content: ReactNode | string;
}

export interface IAccordionProps {
	items: IAccordionItem[];
	style?: StyleProps;
}

const Accordion = ({
	items,
	style,
	...rest
}: IAccordionProps & AccordionProps) => {
	return (
		<ChakraAccordion
			className={`${styles.Accordion} ${style}`}
			allowToggle
			defaultIndex={0}
			{...rest}
		>
			{items.map((item, index) => {
				return (
					<AccordionItem key={index}>
						<AccordionButton
							paddingY={4}
							fontWeight='bold'
							_expanded={{
								color: 'brand.quad.default',
								backgroundColor: 'brand.quad.light',
								borderRadius: 8,
							}}
						>
							<Box as='span' flex='1' textAlign='left'>
								{item.title}
							</Box>

							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel paddingY={4}>
							{item.content}
						</AccordionPanel>
					</AccordionItem>
				);
			})}
		</ChakraAccordion>
	);
};

export default Accordion;
