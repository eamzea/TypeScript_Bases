(() => {
	let avenger: any = 123;

	avenger = 'Dr Strange'

	console.log((avenger as string).charAt(0)) //Casting

	avenger = 21;
	console.log((<Number>avenger).toPrecision(10))
})()