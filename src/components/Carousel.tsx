import React, { forwardRef, useState } from 'react';
import { StyleSheet, Text, View, ViewStyle } from "react-native"
import SnapCarousel, { CarouselProps, Pagination, PaginationProps, AdditionalParallaxProps } from "react-native-snap-carousel"
import Constants, { Colors, Sizes } from '@src/utils/constants';

type ItemType = {
	item: any,
	index: number
}

interface Props {
	renderItem: (
		item: ItemType,
		parallaxProps?: AdditionalParallaxProps,
	) => React.ReactNode
	data: ReadonlyArray<any>
	hasPagination?: boolean
	itemWidth?: number
	style?: ViewStyle
}

const Carousel = forwardRef(({ hasPagination, renderItem, data, style }: Props, forwardedRef) => {
	const [activeIndex, setActiveIndex] = useState(0)
	return <View style={styles.container}>
		<SnapCarousel
			ref={forwardRef}
			style={[{ flex: 1 }, style]}
			data={data}
			renderItem={renderItem}
			onSnapToItem={(index: number) => setActiveIndex(index)}
			sliderWidth={Constants.MAX_WIDTH}
			itemWidth={Constants.MAX_WIDTH}
		/>
		{hasPagination && <Pagination
			containerStyle={styles.pagination}
			dotStyle={styles.dotStyle}
			dotsLength={data.length}
			inactiveDotScale={1}
			inactiveDotOpacity={1}
			inactiveDotStyle={{ paddingHorizontal: Sizes.secondary }}
			activeDotIndex={activeIndex}
		/>}
	</View>
})

export default Carousel

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative'
	},
	dotStyle: {
		paddingHorizontal: Sizes.base,
		borderRadius: Sizes.base,
		backgroundColor: Colors.primary
	},
	pagination: {
		position: 'absolute',
		bottom: 0,
		alignSelf: 'center',
		paddingVertical: Sizes.base * 2
	}
})