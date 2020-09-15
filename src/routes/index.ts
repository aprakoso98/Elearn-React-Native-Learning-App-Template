import { createAppContainer, createSwitchNavigator } from "react-navigation"
import AppNavigator from './UnauthNavigator'

const Switch = createSwitchNavigator({
	AppNavigator
})
const RouteNavigator = createAppContainer(Switch)

export default RouteNavigator