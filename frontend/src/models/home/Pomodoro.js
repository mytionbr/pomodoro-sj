class Pomodoro{
	constructor(data){
		this.pomodoro = data.pomodoro
		this.shortBreak = data.shortBreak
		this.longBreak = data.longBreak
		this.cycle = data.cycle.pomo
		this.session = 0
		this.mode = ['pomodoro','shortBreak','longBreak']
		this.currentMode = this.mode[0]
	}

	endSession(){
        console.log(this.currentMode + ' '+ this.session)
		//verifica se a sessão atual não é uma pausa longa
		if(this.session === 0 || this.session % this.cycle !== 0 || this.currentMode === this.mode[2]){
			if(this.currentMode === this.mode[0]){
				// só irá valer como sessão o modo pomodoro
				// outros modos, como a pausa curta e longa não contaram como sessão
				this.session++
                (this.session % this.cycle !== 0) 
					?  this.currentMode = this.mode[1] 
					: this.currentMode = this.mode[2]
				
			}
			else{
				this.currentMode = this.mode[0]
			}
		}else{
			this.currentMode = this.mode[2]
		}
	}
}

export default Pomodoro