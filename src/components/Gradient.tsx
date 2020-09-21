import { colorMap, colorType } from '@src/utils/constants/type';
import React from 'react';
import { ViewStyle } from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient'

interface Props extends LinearGradientProps {
	style?: ViewStyle
	colors: colorType[]
	children: React.ReactNode
}

const Gradient = ({ children, style, colors = [], ...rest }: Props) => {
	colors = colors.map(c => colorMap(c))
	return <LinearGradient
		{...rest}
		children={children}
		style={style}
		colors={colors}
	/>
}

export default Gradient