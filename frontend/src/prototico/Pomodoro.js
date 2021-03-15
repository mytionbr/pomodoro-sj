class PomodoroController{
	constructor(pomodoroTime, shortBreak, longBreak, cycle){
		this.pomodoroTime = pomodoroTime
		this.shortBreak = shortBreak
		this.longBreak = longBreak
		this.cycle = cycle
		this.session = 0
		this.mode = ['pomodoro','shortBreak','longBreak']
		this.currentMode = this.mode[0]
	}

	fimSessao(){
		
		//verifica se a sessão atual não é uma pausa longa
		if(this.session % this.cycle != 0){
			if(this.currentMode === this.mode[0]){
				// só irá valer como sessão o modo pomodoro
				// outros modos, como a pausa curta e longa não contaram como sessão
				this.session++
				this.currentMode = this.mode[1]
			}
			else{
				this.currentMode = this.mode[0]
			}
		}else{
			this.currentMode = this.mode[2]
		}
	}
	



}