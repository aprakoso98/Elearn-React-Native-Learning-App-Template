import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { ScreenProps } from '@src/utils/types';
import Carousel from '@src/components/Carousel';
import { Images, Sizes } from '@src/utils/constants';
import Button from '@src/components/Button';
import Text from '@src/components/Text';

const Intro = ({ navigation }: ScreenProps) => {
	const imgSize = Dimensions.get('window')
	const data = [Images.familyLearn, Images.student, Images.teacher]
	const renderItem = ({ item }) => <Button style={{ alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
		<Image style={[imgSize, { position: 'absolute' }]} source={item} />
		<View>
			<Text color="light" align="center" size={Sizes.heading3}>elern<Text color="primary" size={Sizes.heading3}>.</Text></Text>
			<Text color="light">Discover a new way of learning</Text>
		</View>
		<Button
			onPress={() => navigation.navigate('Login', { hjhfdj: 7688 })}
			style={{ paddingHorizontal: Sizes.base * 10, marginBottom: Sizes.base * 3 }}>GET STARTED</Button>
	</Button>

	return <Carousel
		hasPagination
		data={data}
		renderItem={renderItem}
	/>
}

export default Intro