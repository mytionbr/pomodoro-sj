class MainController{
	constructor(configPomdoro,Pomodoro,ModeManager,Chronometer){
		this.$ = document.querySelector.bind(document)
		
		this.reference = {
			btnStart: this.$('#start-button'),
			btnPause: this.$('#pause-button'),
			time: this.$('.pomodoro-time'),
			modes: {
				btnPomodoroMode: this.$('#pomodoro-mode'),
				btnShortBreak: this.$('#pausa-curta-mode'),
				btnLongBreak: this.$('#pausa-longa-mode')
			}
		}

        console.log(configPomdoro.pomodoro)
		this.configPomodoro =  configPomdoro
		this.pomodoro = new Pomodoro(this.configPomodoro)
		this.modeManager = new ModeManager(this.pomodoro,this.reference)
		this.chronometer = new Chronometer(this.reference,this.modeManager)

	}

}
export default MainController