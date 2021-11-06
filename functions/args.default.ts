(() => {
	const fullName = (firstName:string, lastName:string, upper: boolean = false):string => {
		return `${firstName} ${lastName}`
	}

	const name = fullName('Peter', 'Parker')
})()