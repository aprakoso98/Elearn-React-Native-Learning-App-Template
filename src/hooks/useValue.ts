import { useState } from 'react';
import { Animated } from 'react-native';

const useValue = (init: number = 0, inputRange: any[], outputRange: any[], duration: number = 250) => {
	const [value] = useState(new Animated.Value(init))
	return [value.interpolate({ inputRange, outputRange }), (newValue: number): void => {
		Animated.timing(value, {
			duration,
			toValue: newValue,
			useNativeDriver: false
		}).start()
	}] as const
}

export default useValue