const tg = window.Telegram.WebApp

export function useTelegram() {
	var BackButton = tg.BackButton
	BackButton.show()
	BackButton.onClick(function () {
		BackButton.hide()
	})

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}

	return {
		BackButton,

		onToggleButton,
		tg,
		user: tg.initDataUnsafe?.user,
	}
}
