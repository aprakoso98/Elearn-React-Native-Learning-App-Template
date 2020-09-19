import React from 'react';
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
		<Body scrollable>
			<Text size={Sizes.heading3}>What do you like to start learning?</Text>
			<Input
				noLabel
				label="Search your courses"
				renderRightAccessory={() => <Icon color={Colors.primary} name="search" />}
			/>
			<Wrapper style={{ marginVertical: Sizes.base, alignItems: 'center' }}>
				<Text size={Sizes.heading5}>My courses</Text>
				<Button onPress={() => navigation.navigate('Course', { transition: fromRight })} isTransparent color="primary">See all</Button>
			</Wrapper>
			<ScrollView showsHorizontalScrollIndicator={false} horizontal>
				<Card onPress={() => navigation.navigate('Course', { transition: fromRight })} style={{ width: 200 }} />
				<Card onPress={() => navigation.navigate('Course', { transition: fromRight })} style={{ width: 200, marginHorizontal: Sizes.base }} />
				<Card onPress={() => navigation.navigate('Course', { transition: fromRight })} style={{ width: 200 }} />
			</ScrollView>
			<Wrapper style={{ marginVertical: Sizes.base, alignItems: 'center' }}>
				<Text size={Sizes.heading5}>Featured content</Text>
				<Button isTransparent color="primary">See all</Button>
			</Wrapper>
			<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
			<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
			<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
			<Wrapper style={{ marginVertical: Sizes.base, alignItems: 'center' }}>
				<Text size={Sizes.heading5}>New courses</Text>
				<Button isTransparent color="primary">See all</Button>
			</Wrapper>
			<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
			<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
			<CardIcon onPress={() => navigation.navigate('Course', { transition: fromRight })} />
		</Body>
	</Container>
}

export default Home