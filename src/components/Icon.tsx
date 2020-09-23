import React from 'react'
import IconFA, { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5'
import { colorMap, colorType, sizeMap, sizeType } from '@src/utils/constants/type'

export type IconProps = FontAwesome5IconProps & {
	color?: colorType
	iconSize?: sizeType
}

const Icon = ({ iconSize = "text", color = "text", ...rest }: IconProps) => {
	color = colorMap(color)
	iconSize = sizeMap(iconSize)
	// @ts-ignore
	return <IconFA size={iconSize} color={color} {...rest} />
}

export default Icon