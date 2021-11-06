(() => {
	const showError = (message: string): never => {
		throw new Error(message)
	}

	showError('There was an error')
})()