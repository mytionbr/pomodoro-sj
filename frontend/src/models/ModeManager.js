class ModeManager{
	constructor(pomodoro,reference){
		this.pomodoro = pomodoro
		this.modes = reference.modes
		this.time = reference.time

		this.addListenerBtnPomodoro(this.modes)
	    this.addListenerBtnShortBreak(this.modes)
		this.addListenerBtnLongBreak(this.modes)

        this.triggerMode()
	}

	addListenerBtnPomodoro({btnPomodoroMode}){
		btnPomodoroMode.addEventListener('click',this.pomodoroMode)
	}

	addListenerBtnShortBreak({btnShortBreak}){
		btnShortBreak.addEventListener('click',this.shortBreakMode)
	}

	addListenerBtnLongBreak({btnLongBreak}){
		btnLongBreak.addEventListener('click',this.longBreakMode)
	}

	pomodoroMode(){
        setTimeout(()=>this.time.innerHTML = `${this.pomodoro.pomodoro.min} : ${this.pomodoro.pomodoro.second}`
        ,100)
    }

	shortBreakMode(){
        setTimeout(()=>this.time.innerHTML = `${this.pomodoro.shortBreak.min} : ${this.pomodoro.shortBreak.second}`
        ,100)
	}
	longBreakMode(){
   		setTimeout(()=>this.time.innerHTML = `${this.pomodoro.longBreak.min} : ${this.pomodoro.longBreak.second}`,100)
	}

    auxTimeout(el){
        console.log('sadffffffffffffffff')
        setTimeout(()=>el,100)
    }

    triggerMode(){
        console.log(this.pomodoro.currentMode)
        switch(this.pomodoro.currentMode){
			case 'pomodoro':
                this.pomodoroMode()
				break
			case 'shortBreak':
				this.shortBreakMode()
				break
			case 'longBreak':
                this.longBreakMode()
				break
            default:
                console.log('eita')
                break
		}
    }

	changeMode(){
		this.pomodoro.endSession()

        this.triggerMode()
	}
}

export default ModeManager  