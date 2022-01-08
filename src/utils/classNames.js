export default function classNames() {
	const args = [...arguments]
	let classReturn = ''

	for (let index = 0; index < args.length; index++) {
		const element = args[index];
		if (element) {
			if (classReturn !== '')
				classReturn += ' '
			classReturn += element
		}
	}

	return classReturn
}