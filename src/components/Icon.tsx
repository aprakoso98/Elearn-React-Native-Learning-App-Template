import { Sizes } from '@src/utils/constants'
import React from 'react'
import IconFA, { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5'

export type IconProps = FontAwesome5IconProps & {}

const Icon = (rest: IconProps) => {
	return <IconFA size={Sizes.text} {...rest} />
}

export default Icon