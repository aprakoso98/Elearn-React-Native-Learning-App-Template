import Constants, { Colors, Sizes } from '@src/utils/constants';
import React, { useRef } from 'react';
import { View } from 'react-native';
import Button from './Button';
import Carousel from './Carousel';
import Text from './Text';
import Wrapper, { WrapperProps } from './Wrapper';
import ReactNativeSnapCarousel from 'react-native-snap-carousel';
import { useStateObject } from '@src/hooks/useState';

export type tabDataType = {
	tabName: string,
	tabData?: React.ReactNode
}[]

interface Props {
	data: tabDataType
	tabMenuProps?: Omit<WrapperProps, 'children'>
}

let myRef
const TabContent = ({ tabMenuProps, data }: Props) => {
	const [state, setState] = useStateObject({
		activeIndex: 0
	})
	return <>
		<Wrapper {...tabMenuProps}>
			{data && data.map(({ tabName }, i) => <Button key={i.toString()} onPress={() => myRef.snapToItem(i)} containerStyle={{
				flex: 1,
				padding: Sizes.base,
				borderBottomColor: Colors[state.activeIndex === i ? "primary" : "text"],
				borderBottomWidth: state.activeIndex === i ? 2 : 1
			}} color={state.activeIndex === i ? "primary" : "text"} isTransparent>{tabName}</Button>)}
		</Wrapper>
		<Carousel
			ref={ref => myRef = ref}
			// @ts-ignore
			data={data}
			onSnapToItem={activeIndex => setState({ activeIndex })}
			renderItem={({ item }) => item.tabData}
		/>
	</>
}

export default TabContent