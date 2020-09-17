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

const Intro = ({ navigation }: ScreenProps) => {
	const imgSize = Dimensions.get('window')
	const data = [Images.familyLearn, Images.teacher, Images.student]
	const renderItem = ({ item }) => <Wrapper direction="column" style={{ paddingBottom: Sizes.base * 3, flex: 1 }}>
		<Image style={[imgSize, { position: 'absolute' }]} source={item} />
		<View style={{ marginTop: Sizes.base }}>
			<Text color="light" align="center" size={Sizes.heading3}>elern<Text color="primary" size={Sizes.heading3}>.</Text></Text>
			<Text color="light">Discover a new way of learning</Text>
		</View>
		<Button style={{ paddingHorizontal: Sizes.bodyPadding * 2 }} withMargin onPress={() => navigation.navigate('Login')}>GET STARTED</Button>
	</Wrapper>

	return <Container style={{ padding: 0 }}>
		<Header absolute color="transparent" backgroundColor="transparent" />
		<Carousel
			hasPagination
			data={data}
			renderItem={renderItem}
		/>
	</Container>
}

export default Intro