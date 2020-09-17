import Button from '@src/components/Button';
import Card, { CardIcon } from '@src/components/Card';
import Container, { Body } from '@src/components/Container';
import Header from '@src/components/Header';
import TabContent from '@src/components/TabContent';
import Text from '@src/components/Text';
import { Sizes } from '@src/utils/constants';
import { ScreenProps } from '@src/utils/types';
import React from 'react';
import { View } from 'react-native';
import { fromRight } from 'react-navigation-transitions';

const MyCourses = ({ navigation }: ScreenProps) => {
	const InProcessTab = <Body style={{ marginTop: Sizes.base }} scrollable>
		<Card onPress={() => navigation.navigate('Course', { transition: fromRight })} />
		<CardIcon />
		<CardIcon />
		<CardIcon />
	</Body>
	const NewTab = InProcessTab
	const FinishedTab = InProcessTab
	const dataTab = [
		{ tabName: "In Process", tabData: InProcessTab },
		{ tabName: "New", tabData: NewTab },
		{ tabName: "Finished", tabData: FinishedTab }
	]
	return <Container>
		<Header onPressLeft={() => navigation.goBack()} />
		<Body style={{ paddingHorizontal: 0 }}>
			<Text style={{ marginHorizontal: Sizes.bodyPadding }} size="heading3" >My Courses</Text>
			<TabContent wrapperProps={{ style: { paddingHorizontal: Sizes.base * 4 } }} data={dataTab} />
		</Body>
	</Container>
}

export default MyCourses