import ColorManeger from '../../util/ColorManeger.js'

class ModeManager{
	constructor(pomodoro,reference){
		this.pomodoro = pomodoro
		this.modes = reference.modes
		this.time = reference.time
		this.colorManeger = new ColorManeger()
		this.triggerMode()
		this.addListenerBtnPomodoro(this.modes)
	    this.addListenerBtnShortBreak(this.modes)
		this.addListenerBtnLongBreak(this.modes)
		
		

	}

	addListenerBtnPomodoro({btnPomodoroMode}){
		btnPomodoroMode.addEventListener('click',()=>{
			this.pomodoroMode()
			this.pomodoro.currentMode = this.pomodoro.mode[0]
			
		})
	}

	addListenerBtnShortBreak({btnShortBreak}){
		btnShortBreak.addEventListener('click',()=> {
			this.shortBreakMode()
			this.pomodoro.currentMode = this.pomodoro.mode[1]
		})
	}

	addListenerBtnLongBreak({btnLongBreak}){
		btnLongBreak.addEventListener('click',()=>{
			this.longBreakMode()
			this.pomodoro.currentMode = this.pomodoro.mode[2]
		})
	}

	pomodoroMode = ()=>{

       	setTimeout(()=>{
			   this.time.innerHTML = `${this.pomodoro.pomodoro.min} : ${this.pomodoro.pomodoro.second}`
			   this.colorManeger.changeBackground('pomodoro')
			}
        ,10)
    }

	shortBreakMode = ()=>{
		setTimeout(()=>{
			this.time.innerHTML = `${this.pomodoro.shortBreak.min} : ${this.pomodoro.shortBreak.second}`
			this.colorManeger.changeBackground('shortBreak')
		}
        ,10)
	}
	longBreakMode = ()=>{
		setTimeout(()=>{
			this.time.innerHTML = `${this.pomodoro.longBreak.min} : ${this.pomodoro.longBreak.second}`
			this.colorManeger.changeBackground('longBreak')
		}
		,10)
	}

    auxTimeout(el){
        setTimeout(()=>el,100)
    }

    triggerMode(){
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