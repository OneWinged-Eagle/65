export const getExtension = (filename: string) => {
	const regexec = /(?:\.([^.]+))?$/.exec(filename) || []
	return regexec[1] || ""
}
