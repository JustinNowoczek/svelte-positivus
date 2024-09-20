export default function splitText(text: string) {
	const middle = parseInt(text.length / 2 + '')

	let target = 0

	while (target < middle / 2) {
		if (text[middle + target] === ' ') {
			break
		} else if (text[middle - target] === ' ') {
			target = -target
			break
		}

		target++
	}

	return [text.slice(0, middle + target), text.slice(middle + target + 1)]
}

