const tg = window.Telegram.WebApp

export function useTelegram() {
	var BackButton = tg.BackButton
	BackButton.show()
	BackButton.onClick(function () {
		BackButton.hide()
		window.history.back()
	})

	return {
		BackButton,
	}
}
