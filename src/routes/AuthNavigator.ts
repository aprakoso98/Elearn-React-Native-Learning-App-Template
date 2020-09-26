import Account from '@src/screens/Account'
import Cart from '@src/screens/Cart'
import Course from '@src/screens/Course'
import CoursePlay from '@src/screens/CoursePlay'
import Home from '@src/screens/Home'
import MyCourses from '@src/screens/MyCourses'
import MyReview from '@src/screens/MyReview'
import Notification from '@src/screens/Notification'
import Payment from '@src/screens/Payment'
import Profile from '@src/screens/Profile'
import SubmitReview from '@src/screens/SubmitReview'
import { StackNavProps } from "@src/utils/types"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { fadeIn } from "react-navigation-transitions"
import { sceneType } from '.'

const handleCustomTransition = ({ scenes }) => {
	const prevScene: sceneType = scenes[scenes.length - 2]
	const nextScene: sceneType = scenes[scenes.length - 1]
	if (prevScene && nextScene && nextScene.route.params && nextScene.route.params.transition) {
		return nextScene.route.params.transition()
	}
	return fadeIn()
}

const Navs: StackNavProps = {
	Home: { screen: Home },
	Account: { screen: Account },
	MyCourses: { screen: MyCourses },
	Notification: { screen: Notification },
	Cart: { screen: Cart },
	Payment: { screen: Payment },
	Course: { screen: Course },
	CoursePlay: { screen: CoursePlay },
	SubmitReview: { screen: SubmitReview },
	MyReview: { screen: MyReview },
	Profile: { screen: Profile },
}

const Stack = createStackNavigator(Navs, {
	headerMode: "none",
	// initialRouteName: "Profile",
	transitionConfig: nav => handleCustomTransition(nav),
})

const AuthNavigator = createAppContainer(Stack)
export default AuthNavigator