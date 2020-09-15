import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')
const Constants = {
	PADDING: 20,
	FONT_SIZE: 14,
	MAX_HEIGHT: height,
	MAX_WIDTH: width,
}

const Colors = {
	primary: 'black'
}

const Sizes = {
	base: 10,
	secondary: 5
}

export { Colors, Sizes }
export default Constants