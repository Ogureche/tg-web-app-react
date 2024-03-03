const useTelegram = () => {
	const tg = window.Telegram.WebApp
	var BackButton = tg.BackButton
	BackButton.show()
	BackButton.onClick(function () {
		BackButton.hide()
	})
	tg.onEvent('backButtonClicked', function () {
		window.history.back()
	})
}

export default useTelegram
