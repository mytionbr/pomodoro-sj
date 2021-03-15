class modesController{
	constructor(pomodoro,time,btnPomodoro,btnShortBreak,btnLongBreak){
		this.time = time
		this.btnPomodoro = btnPomodoro
		this.btnShortBreak = btnShortBrea
		this.btnLongBreak = btnLongBreak
		this.pomodoro = pomodoro

		addListeners(this.btnPomodoro,this.btnShortBreak,this.btnLongBreak)
	}

	addListeners(btnPomodoro,btnShortBreak,btnLongBreak){
		listenerPomodoro(btnPomodoro)
		listenerShortBreak(btnShortBreak)
		listenerLongBreak(btnLongBreak)
	}

	listenerPomodoro(reference){
		reference.addEventListener("click",()=>{
			startPomodoro()
		})
	}

	listenerShortBreak(reference){
		reference.addEventListener("click",()=>{
			startShortBreak()
		})
	}

	listenerLongBreak(reference){
		reference.addEventListener("click",()=>{
			startLongBreak()
		})
	}

	startPomodoro(){
		 this.time.innerHTML = `${this.pomodoro.pomodoroTime.min} : ${this.pomodoro.pomodoroTime.second}`
	}

	startShortBreak(){
		 this.time.innerHTML = `${this.pomodoro.shortBreak.min} : ${this.pomodoro.shortBreak.second}`
	}

	startLongBreak(){
		this.time.innerHTML = `${this.pomodoro.longBreak.min} : ${this.pomodoro.longBreak.second}`
	}

}