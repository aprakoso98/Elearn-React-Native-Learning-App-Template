import Account from '@src/screens/Account'
import Home from '@src/screens/Home'
import { prettyConsole } from '@src/utils/helper'
import { StackNavProps } from "@src/utils/types"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { fadeIn, fromBottom } from "react-navigation-transitions"
import { sceneType } from '.'

const handleCustomTransition = ({ scenes }) => {
	const prevScene: sceneType = scenes[scenes.length - 2]
	const nextScene: sceneType = scenes[scenes.length - 1]
	if (prevScene && nextScene && nextScene.route.params.transition) {
		return nextScene.route.params.transition()
	}
	return fadeIn()
}

const Navs: StackNavProps = {
	Home: { screen: Home },
	Account: { screen: Account },
}

const Stack = createStackNavigator(Navs, {
	headerMode: "none",
	transitionConfig: nav => handleCustomTransition(nav),
})

const AuthNavigator = createAppContainer(Stack)
export default AuthNavigator