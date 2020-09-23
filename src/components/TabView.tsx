import { Colors, Sizes } from '@src/utils/constants';
import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import Carousel from './Carousel';
import Wrapper, { WrapperProps } from './Wrapper';
import { useStateObject } from '@src/hooks/useState';

export type tabDataType = {
	tabName: string | { [key: string]: any },
	tabData?: React.ReactNode
}[]

interface Props {
	data: tabDataType
	positionMenu?: 'top' | 'bottom' | 'right' | 'left'
	tabMenuProps?: Omit<WrapperProps, 'children'>
	onChangeTab?: (activeIndex: number) => void
	renderTab?: (data: tabDataType) => React.ReactNode
}

let myRef
const TabView = ({ onChangeTab, positionMenu = 'top', renderTab, tabMenuProps, data }: Props) => {
	const direction = { top: 'column', right: 'row-reverse', bottom: 'column-reverse', left: 'row' }
	const flexDirection = direction[positionMenu]
	const [state, setState] = useStateObject({
		activeIndex: 0
	})
	// @ts-ignore
	return <View style={{ flex: 1, flexDirection }}>
		{renderTab ? renderTab(data) :
			<Wrapper {...tabMenuProps}>
				{data && data.map(({ tabName }, i) => <Button key={i.toString()} onPress={() => myRef.snapToItem(i)} containerStyle={{
					flex: 1,
					padding: Sizes.base,
					borderBottomColor: Colors[state.activeIndex === i ? "primary" : "text"],
					borderBottomWidth: state.activeIndex === i ? 2 : 1
				}} color={state.activeIndex === i ? "primary" : "text"} isTransparent>{tabName}</Button>)}
			</Wrapper>
		}
		<Carousel
			// @ts-ignore
			ref={ref => myRef = ref}
			data={data}
			onSnapToItem={activeIndex => {
				setState({ activeIndex })
				if (onChangeTab) onChangeTab(activeIndex)
			}}
			renderItem={({ item }) => item.tabData}
		/>
	</View >
}

export default TabView