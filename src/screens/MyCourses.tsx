import Card, { CardIcon } from '@src/components/Card';
import Container, { Body } from '@src/components/Container';
import Header from '@src/components/Header';
import TabView from '@src/components/TabView';
import Text from '@src/components/Text';
import { Sizes } from '@src/utils/constants';
import { ScreenProps } from '@src/utils/types';
import React from 'react';
import { View } from 'react-native';

const MyCourses = ({ navigation }: ScreenProps) => {
	const params = navigation.state.params || {}

	const CardIcons = () => <CardIcon onPress={() => navigation.navigate('Course', navigation.state.params)} />
	const Cards = () => <Card onPress={() => navigation.navigate('Course', navigation.state.params)} />

	const TabData = (isInProcess?) => <View style={{ paddingHorizontal: Sizes.bodyPadding, marginTop: Sizes.bodyVertical }}>
		{
			isInProcess &&
			<Cards />
		}
		<CardIcons />
		<CardIcons />
		<CardIcons />
		<CardIcons />
		<CardIcons />
		<CardIcons />
		<CardIcons />
		<CardIcons />
		<CardIcons />
		<CardIcons />
		{!isInProcess && <CardIcons />}
	</View>

	const dataTab = params.title ?
		[{ tabName: 'New', tabData: TabData() }] :
		[
			{ tabName: "In Process", tabData: TabData(true) },
			{ tabName: "New", tabData: TabData() },
			{ tabName: "Finished", tabData: TabData() }
		]

	return <Container>
		<Header onPressLeft={() => navigation.goBack()} />
		<Body scrollable style={{ paddingHorizontal: 0 }}>
			<Text style={{ marginHorizontal: Sizes.bodyPadding }} size="heading1" >{params.title || 'My Courses'}</Text>
			<TabView tabMenuProps={{ style: { display: params.title ? 'none' : 'flex', paddingHorizontal: Sizes.base * 4 } }} data={dataTab} />
		</Body>
	</Container>
}

export default MyCourses