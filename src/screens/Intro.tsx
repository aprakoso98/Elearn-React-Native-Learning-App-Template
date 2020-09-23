import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { ScreenProps } from '@src/utils/types';
import Carousel from '@src/components/Carousel';
import { Images, Sizes } from '@src/utils/constants';
import Button from '@src/components/Button';
import Text from '@src/components/Text';
import Wrapper from '@src/components/Wrapper';
import Container from '@src/components/Container';
import Header from '@src/components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Gradient from '@src/components/Gradient';

const Intro = ({ navigation }: ScreenProps) => {
	const { width, height } = Dimensions.get('window')
	const data = [Images.familyLearn, Images.teacher, Images.student]
	const renderItem = ({ item }) => <Wrapper direction="column" style={{ flex: 1, overflow: 'hidden' }}>
		<Image style={{ position: 'absolute', width: width * 1.3, height: height * 1.3 }} source={item} />
		<Gradient start={{ x: .5, y: .5 }} end={{ x: .5, y: 1 }} style={{ justifyContent: 'space-between', width: '100%', flex: 1, paddingVertical: Sizes.bodyPadding }} colors={["transparent", "light"]}>
			<View>
				<Text color="light" align="center" size="logo">elern<Text color="primary" size="logo">.</Text></Text>
				<Text color="light" align="center">Discover a new way of learning</Text>
			</View>
			<Button style={{ paddingHorizontal: Sizes.bodyPadding * 2 }} withMargin onPress={() => navigation.navigate('Login')}>GET STARTED</Button>
		</Gradient>
	</Wrapper>

	return <Container barColor="primary" barStyle="light-content">
		<Carousel
			hasPagination
			data={data}
			renderItem={renderItem}
		/>
	</Container>
}

export default Intro