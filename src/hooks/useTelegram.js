const tg = window.Telegram.WebApp

export function useTelegram() {
	const onClose = () => {
		tg.close()
	}
	var BackButton = tg.BackButton
	BackButton.show()
	BackButton.onClick(function () {
		BackButton.hide()
	})
	tg.onEvent('backButtonClicked', function () {
		window.history.back()
	})

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
