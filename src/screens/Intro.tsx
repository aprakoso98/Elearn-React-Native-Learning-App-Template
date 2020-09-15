import React from 'react';
import { Text, View } from 'react-native';
import { ScreenProps } from '@src/utils/types';
import Carousel from '@src/components/Carousel';

const Intro = ({ navigation }: ScreenProps) => {
	return <Carousel
		hasPagination
		ref={e => console.log(e)}
		data={["d", "hjk", "hhj"]}
		renderItem={({ item }) => <View style={{ flex: 1, backgroundColor: 'blue' }}>
			<Text>{item}</Text>
		</View>}
	/>
}

export default Intro