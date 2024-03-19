import { Component, ReactNode } from 'react'

interface IProps {
	fallback?: ReactNode
	children: ReactNode
}

interface IState {
	hasError: boolean
}

export class ErrorBoundary extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		console.log('error catched')
		return { hasError: true }
	}

	static componentDidCatch() {
		console.log('error catched')
		return { hasError: true }
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback
		}

		return this.props.children
	}
}
