import React, { useState } from 'react';
import Container, { Body } from '@src/components/Container';
import Header, { IconHeader } from '@src/components/Header';
import { ScreenProps } from '@src/utils/types';
import Text from '@src/components/Text';
import Button from '@src/components/Button';
import { Image, ScrollView, View } from 'react-native';
import { Colors, Icons, Sizes } from '@src/utils/constants';
import Input from '@src/components/Input';
import Icon from '@src/components/Icon';
import Wrapper from '@src/components/Wrapper';
import Card, { CardIcon } from '@src/components/Card';
import { fromLeft, fromRight } from 'react-navigation-transitions';

const Home = ({ navigation }: ScreenProps) => {
	const [search, setSearch] = useState('')
	return <Container>
		<Header onPressLeft={() => navigation.navigate('Account', { transition: fromLeft })} iconLeft="bars">
			<Button onPress={() => navigation.navigate('Notification', { transition: fromRight })} isTransparent>
				<IconHeader name="bell" />
				<View style={{
					position: 'absolute',
					bottom: 0,
					left: -Sizes.secondary / 2,
					padding: Sizes.secondary / 2,
					borderRadius: Sizes.base,
					backgroundColor: Colors.danger
				}} />
			</Button>
		</Header>
		<Body noPadding scrollable>
			<View style={{ marginHorizontal: Sizes.bodyPadding }}>
				<Text size={Sizes.heading3}>What do you like to start learning?</Text>
				<Input
					noLabel
					value={search}
					onChangeText={search => setSearch(search)}
					label="Search your courses"
					renderRightAccessory={() => <Icon color={Colors.primary} name="search" />}
				/>
				<Wrapper style={{ marginVertical: Sizes.base, alignItems: 'center' }}>
					<Text size={Sizes.heading5}>My courses</Text>
					<Button onPress={() => navigation.navigate('MyCourses', { paid: true, transition: fromRight })} isTransparent color="primary">See all</Button>
				</Wrapper>
			</View>
			<ScrollView contentContainerStyle={{ paddingHorizontal: Sizes.bodyPadding }} showsHorizontalScrollIndicator={false} horizontal>
				<Card onPress={() => navigation.navigate('Course', { paid: true, transition: fromRight })} style={{ width: 250 }} />
				<Card color="text" bColor="light" borderColor="grey" barColor="greySoft" onPress={() => navigation.navigate('Course', { paid: true, transition: fromRight })} style={{ width: 250, marginHorizontal: Sizes.base }} />
				<Card color="text" bColor="light" borderColor="grey" barColor="greySoft" onPress={() => navigation.navigate('Course', { paid: true, transition: fromRight })} style={{ width: 250 }} />
			</ScrollView>
			<View style={{ marginHorizontal: Sizes.bodyPadding }}>
				<Wrapper style={{ marginVertical: Sizes.base, alignItems: 'center' }}>
					<Text size={Sizes.heading5}>Featured content</Text>
					<Button onPress={() => navigation.navigate('MyCourses', { title: 'Featured content', transition: fromRight })} isTransparent color="primary">See all</Button>
				</Wrapper>
				<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
				<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
				<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
				<Wrapper style={{ marginVertical: Sizes.base, alignItems: 'center' }}>
					<Text size={Sizes.heading5}>New courses</Text>
					<Button onPress={() => navigation.navigate('MyCourses', { title: 'New courses', transition: fromRight })} isTransparent color="primary">See all</Button>
				</Wrapper>
				<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
				<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
				<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
			</View>
		</Body>
	</Container>
}

export default Home