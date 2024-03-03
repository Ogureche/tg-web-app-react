const tg = window.Telegram.WebApp

var BackButton = tg.BackButton
BackButton.show()
BackButton.onClick(function () {
	BackButton.hide()
})

export function useTelegram() {
	const onClose = () => {
		tg.close()
	}

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}

	return {
		onClose,
		onToggleButton,
		tg,
		user: tg.initDataUnsafe?.user,
	}
}
