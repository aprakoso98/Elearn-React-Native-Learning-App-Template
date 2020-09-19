import React from 'react';
import Container, { Body } from '@src/components/Container'
import Header from '@src/components/Header';
import { ScreenProps } from '@src/utils/types';
import Wrapper from '@src/components/Wrapper';
import { View } from 'react-native';
import Text from '@src/components/Text';
import Button, { ButtonChevron } from '@src/components/Button';
import { Colors, Sizes } from '@src/utils/constants';
import { fromRight } from 'react-navigation-transitions';
import Icon from '@src/components/Icon';

const Account = ({ navigation }: ScreenProps) => {
	return <Container>
		<Header onPressLeft={() => navigation.goBack()} />
		<Body scrollable>
			<Wrapper>
				<View style={{ borderRadius: 50, padding: 35, backgroundColor: Colors.dark }} />
				<View style={{ flex: .95 }}>
					<Text size={Sizes.heading4}>Julian Smith</Text>
					<Button justifyContent="flex-start" isTransparent color="primary">View profile</Button>
				</View>
			</Wrapper>
			<ButtonChevron style={{ marginTop: Sizes.base * 3 }} onPress={() => navigation.navigate('MyCourses', { transition: fromRight })} label="My Courses" />
			<ButtonChevron label="My Reviews" />
			<Text size="heading5" style={{ marginTop: Sizes.base * 3, marginBottom: Sizes.secondary }}>Settings</Text>
			<ButtonChevron label="Language">English</ButtonChevron>
			<ButtonChevron label="Documentations" />
			<ButtonChevron label="Support Center" />
			<ButtonChevron label="Share Feedback" />
			<ButtonChevron label="Visit Our Website" />
			<ButtonChevron label="Rate The App" />
			<Button style={{ marginVertical: Sizes.bodyTop }} bColor="greySoft" color="grey">LOGOUT</Button>
			<Text color="grey" align="center">Copyright<Icon iconSize="base" color="grey" name="copyright" /> all rights reserved by gorilab.id</Text>
		</Body>
	</Container>
}

export default Account