import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import Button from '../../components/Button';
import Eyebrow from '../../components/Eyebrow';
import Form from '../../components/Form';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Title from '../../components/Title';
import Loader from '../../components/Loader';
import PageTemplate from '../../templates/Page';
import Link from 'next/link';
import { facebookLink, instagramLink, twitterLink } from '../../utils/navLinks';

const Contact = () => {
	const [successfulSubmission, setSuccessfulSubmission] =
		useState<boolean>(false);
	const submitContact = () => {
		setSuccessfulSubmission(true);
	};
	return (
		<PageTemplate
			metaTitle='Contact Vibes DIY Studio Today'
			metaDescription='Contact Vibes DIY Studio, the Premiere Creative Space located in the Northwest Las Vegas area.'
		>
			<Hero title='Contact' bgImg='/contact_bg.png' />
			<Section>
				<Flex
					justifyContent='space-between'
					columnGap={48}
					flexDirection={{ base: 'column-reverse', md: 'row' }}
				>
					<Box
						width={{ base: '100%', md: '50%' }}
						marginTop={{ base: 8, md: 0 }}
					>
						<Title h3 eyebrow='primary'>
							Get in touch with us today!
						</Title>
						<Text>
							Complete all of the fields below and someone from
							our team will get in touch with you.
						</Text>
						{!successfulSubmission ? (
							<Form
								onSubmit={submitContact}
								formName='contact'
								submitButton={{
									children: 'Submit',
								}}
								inputs={[
									{
										type: 'text',
										name: 'fname',
										placeholder: 'John',
										label: 'First Name',
										required: true, //@ts-ignore
										validation: ['REQUIRED'],
									},
									{
										type: 'text',
										name: 'lname',
										placeholder: 'Doe',
										label: 'Last Name',
										required: true, //@ts-ignore
										validation: ['REQUIRED'],
									},
									{
										type: 'email',
										name: 'email',
										placeholder: 'john@doe.com',
										label: 'Email',
										required: true, //@ts-ignore
										validation: ['REQUIRED', 'EMAIL'],
									},
									{
										type: 'textarea',
										name: 'message',
										placeholder:
											'Let us know how we are doing!',
										label: 'Message',
										required: true, //@ts-ignore
										validation: ['REQUIRED'],
									},
								]}
							/>
						) : (
							<Flex
								borderTop='4px'
								paddingTop={8}
								flexDirection='column'
								alignItems='center'
							>
								<Title
									h4
									textAlign='center'
									color='brand.secondary.default'
								>
									Thank you so much!
								</Title>
								<Text textAlign='center'>
									Someone from our team will be getting in
									touch with you very soon.
								</Text>
								<Button variant='primary-outline' href='/'>
									Go Home
								</Button>
							</Flex>
						)}
					</Box>
					<Box width={{ base: '100%', md: '50%' }}>
						<Eyebrow color='primary' />
						<Title h5>Address:</Title>
						<Text>
							7557 Norman Rockwell Ln, Suite 120
							<br />
							Las Vegas, NV, 89143
							<br />
							Located in The Village of Centennial Springs
						</Text>
						<Title h5>Hours:</Title>
						<Text>
							Wednesday, Thursday, Sunday: 12pm -
							<br />
							Saturday - 10am - 9pm
							<br />
							Monday & Tuesday - Closed
						</Text>
						<Title h5>Phone:</Title>
						<Text>702.395.3349</Text>
						<Flex gap={4}>
							<Link href={facebookLink}>
								<Icon
									aria-label='Visit Vibes DIY Studio on Facebook'
									as={FaFacebook}
									boxSize={8}
									color='brand.primary.default'
									_hover={{
										color: 'brand.primary.hover',
									}}
								/>
							</Link>
							<Link href={instagramLink}>
								<Icon
									aria-label='Visit Vibes DIY Studio on Facebook'
									as={FaInstagram}
									boxSize={8}
									color='brand.primary.default'
									_hover={{
										color: 'brand.primary.hover',
									}}
								/>
							</Link>
							<Link href={twitterLink}>
								<Icon
									aria-label='Visit Vibes DIY Studio on Facebook'
									as={FaTwitter}
									boxSize={8}
									color='brand.primary.default'
									_hover={{
										color: 'brand.primary.hover',
									}}
								/>
							</Link>
						</Flex>
					</Box>
				</Flex>
			</Section>
		</PageTemplate>
	);
};

export default Contact;
