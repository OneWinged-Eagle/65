export const ping = (url: string, callback: (success: boolean, pong: number) => void) => {
	const start = new Date()

	const img = new Image()
	img.onload = () => callback(true, new Date().getTime() - start.getTime())
	img.onerror = () => callback(false, new Date().getTime() - start.getTime())

	img.src = `${url}/favicon.ico?${start}`
}
