import { createAppContainer, createSwitchNavigator } from "react-navigation"
import UnAuthNavigator from './UnauthNavigator'
import AuthNavigator from './AuthNavigator';

export interface sceneType {
	route: {
		params: {
			transition?: () => void,
			[key: string]: any
		},
		routeName: string,
		key: string
	}
}

const Switch = createSwitchNavigator({
	UnAuthNavigator,
	AuthNavigator,
})
const RouteNavigator = createAppContainer(Switch)

export default RouteNavigator