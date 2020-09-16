import { useState } from 'react'

const useStateObject = (initState: { [key: string]: any } = {}) => {
	const [state, setState] = useState(initState)
	return [state, (newValue: object) => {
		setState({ ...state, ...newValue })
	}, (override: { [key: string]: any }) => {
		setState(override)
	}] as const
}

const useStateArray = (initState: any[] = []) => {
	const [state, setState] = useState(initState)
	return [state, (newValue: any, indexOrPush: number | boolean) => {
		let newState = state.slice()
		if (typeof indexOrPush === 'boolean' && indexOrPush) {
			newState.push(newValue)
		} else if (typeof indexOrPush === 'number') {
			newState[indexOrPush] = newValue
		}
		setState(newState)
	}, (override: any[]) => {
		setState(override)
	}] as const
}

export { useStateObject, useStateArray }