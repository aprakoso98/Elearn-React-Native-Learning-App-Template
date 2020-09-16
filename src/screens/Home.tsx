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
import Card from '@src/components/Card';
import { fromLeft } from 'react-navigation-transitions';

const Home = ({ navigation }: ScreenProps) => {
	return <Container>
		<Header onPressLeft={() => navigation.navigate('Account', { transition: fromLeft })} iconLeft="bars">
			<Button isTransparent>
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
				label="Search your courses"
				renderRightAccessory={() => <Icon name="search" />}
			/>
			<Wrapper style={{ alignItems: 'center' }}>
				<Text size={Sizes.heading5}>My courses</Text>
				<Button containerStyle={{ marginBottom: 0 }} isTransparent color="primary">See all</Button>
			</Wrapper>
			<ScrollView showsHorizontalScrollIndicator={false} horizontal>
				<Card /><Card /><Card /><Card /><Card /><Card />
			</ScrollView>
			<Wrapper style={{ alignItems: 'center' }}>
				<Text size={Sizes.heading5}>Featured content</Text>
				<Button containerStyle={{ marginBottom: 0 }} isTransparent color="primary">See all</Button>
			</Wrapper>
			<Wrapper>
				<View style={{ backgroundColor: Colors.primary, padding: Sizes.base, borderRadius: Sizes.secondary }}>
					<Image source={Icons.rulerPen} />
				</View>
				<View style={{ justifyContent: 'space-between', flex: 1, marginHorizontal: Sizes.base }}>
					<Text>Mathematic Aljabar - Grade 6</Text>
					<Text color="grey">by George Smith</Text>
				</View>
				<View>
					<Icon color={Colors.gold} solid name="star" />
					<Text>4.7</Text>
				</View>
			</Wrapper>
			<Wrapper style={{ alignItems: 'center' }}>
				<Text size={Sizes.heading5}>New courses</Text>
				<Button containerStyle={{ marginBottom: 0 }} isTransparent color="primary">See all</Button>
			</Wrapper>
			<Wrapper>
				<View style={{ backgroundColor: Colors.primary, padding: Sizes.base, borderRadius: Sizes.secondary }}>
					<Image source={Icons.rulerPen} />
				</View>
				<View style={{ justifyContent: 'space-between', flex: 1, marginHorizontal: Sizes.base }}>
					<Text>Mathematic Aljabar - Grade 6</Text>
					<Text color="grey">by George Smith</Text>
				</View>
				<View>
					<Icon color={Colors.gold} solid name="star" />
					<Text>4.7</Text>
				</View>
			</Wrapper>
		</Body>
	</Container>
}

export default Home