import React, { forwardRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ViewStyle } from "react-native"
import SnapCarousel, { CarouselProps, Pagination, PaginationProps, AdditionalParallaxProps } from "react-native-snap-carousel"
import Constants, { Colors, Sizes } from '@src/utils/constants';
import { useStateObject } from '@src/hooks/useState';
import { prettyConsole } from '@src/utils/helper';

type ItemType = {
	item: any,
	index: number
}

interface Props {// extends SnapCarousel<{}> {
	renderItem: (
		item: ItemType,
		parallaxProps?: AdditionalParallaxProps,
	) => React.ReactNode
	onSnapToItem?: (index: number) => void
	data: any[]
	hasPagination?: boolean
	itemWidth?: number
	style?: ViewStyle
}

/* @ts-ignore  */
const Carousel: React.FC<Props> = forwardRef(({ onSnapToItem, hasPagination, renderItem, data, style }, forwardedRef?: (event: SnapCarousel<{}>) => void) => {
	const [state, setState] = useStateObject({
		activeIndex: 0,
		layout: { width: 1 }
	})
	return <View onLayout={({ nativeEvent: { layout } }) => setState({ layout })} style={{ flex: 1, ...style }}>
		<SnapCarousel
			data={data}
			ref={forwardedRef}
			/* @ts-ignore  */
			renderItem={renderItem}
			onSnapToItem={(activeIndex: number) => {
				if (onSnapToItem) onSnapToItem(activeIndex)
				setState({ activeIndex })
			}}
			useScrollView
			sliderWidth={state.layout.width}
			itemWidth={state.layout.width}
		/>
		{hasPagination && <Pagination
			containerStyle={styles.pagination}
			dotStyle={styles.dotStyle}
			dotsLength={data.length}
			inactiveDotScale={1}
			inactiveDotOpacity={1}
			inactiveDotStyle={{ paddingHorizontal: Sizes.secondary }}
			activeDotIndex={state.activeIndex}
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
		paddingVertical: Sizes.bodyPadding - Sizes.base
	}
})