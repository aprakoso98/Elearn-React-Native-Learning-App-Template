import Container, { Body } from '@src/components/Container';
import Header, { IconHeader } from '@src/components/Header';
import Icon from '@src/components/Icon';
import Text from '@src/components/Text';
import Wrapper from '@src/components/Wrapper';
import Constants, { Colors, Images, Sizes } from '@src/utils/constants';
import { ScreenProps } from '@src/utils/types';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

const CoursePlay = ({ navigation }: ScreenProps) => {
	return <Container barColor="dark" barStyle="light-content">
		<Header backgroundColor="transparent" color="light" absolute onPressLeft={() => navigation.goBack()} />
		<ImageBackground style={{ width: '100%', height: Constants.MAX_HEIGHT / 3 }} source={Images.emc2}>
			<View style={{
				padding: Sizes.bodyVertical,
				backgroundColor: Colors.blackTransparent,
				flex: 1,
				justifyContent: 'flex-end',
				alignItems: 'flex-end'
			}}>
				<IconHeader color="light" name="expand" />
			</View>
		</ImageBackground>
		<Body noPadding scrollable>
			<View style={{ paddingHorizontal: Sizes.bodyPadding }}>
				<View style={{ marginTop: Sizes.bodyVertical }}>
					<Wrapper justifyContent="center">
						<Icon color="primary" name="step-backward" iconSize="heading2" />
						<Icon color="primary" style={{ marginHorizontal: Sizes.base }} name="pause-circle" solid iconSize="logo" />
						<Icon color="primary" name="step-forward" iconSize="heading2" />
					</Wrapper>
					<Text style={{ marginVertical: Sizes.bodyVertical }} align="center">12:00 / 22:00</Text>
				</View>
				<Text>1. Ipsum reprehenderit excepteur aliqua.</Text>
				<Text color="grey">Ipsum reprehenderit excepteur aliqua consequat occaecat tempor ex est aliqua proident ad. Do elit cupidatat aliquip ad anim proident. Eiusmod deserunt mollit sunt cupidatat culpa.</Text>
			</View>
			<Text color="grey" style={{ padding: Sizes.bodyVertical, marginHorizontal: Sizes.bodyVertical, borderRadius: Sizes.secondary, backgroundColor: Colors.greySoft }}>Ipsum reprehenderit excepteur aliqua consequat occaecat tempor ex est aliqua proident ad. Do elit cupidatat aliquip ad anim proident. Eiusmod deserunt mollit sunt cupidatat culpa.</Text>
			<View style={{ paddingHorizontal: Sizes.bodyPadding }}>
				<Text color="grey">Ipsum reprehenderit excepteur aliqua consequat occaecat tempor ex est aliqua proident ad. Do elit cupidatat aliquip ad anim proident. Eiusmod deserunt mollit sunt cupidatat culpa.</Text>
			</View>
		</Body>
	</Container>
}

export default CoursePlay