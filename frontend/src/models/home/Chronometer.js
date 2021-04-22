class Chronometer{
	constructor({btnStart,btnPause,time},modeManager){
		this.btnStart = btnStart
		this.btnPause = btnPause
		this.time = time
        this.timeGUI = this.time.innerHTML.split(':')
		this.minute = this.timeGUI[0]
		this.second = this.timeGUI[1]
		this.modeManager = modeManager
		this.timeout = null
        
        this.modeManager.pause(this.pauseTime)
		
		this.disabledBtnPause()

		this.handleStartButton()
		this.handlePauseTime()
	}

    updateDate(){
        this.timeGUI = this.time.innerHTML.split(':')
		this.minute = this.timeGUI[0]
		this.second = this.timeGUI[1]
    }

	startTime = ()=>{
		this.enableBtnPause()
        this.updateDate()
		
		<div className="pomodoro-container">
        <div className="pomodoro-options">
            <button id='pomodoro-mode'>Pomodoro</button>
            <button id='pausa-curta-mode'>Pausa curta</button>
            <button id='pausa-longa-mode'>Pausa longa</button>
        </div>
        <div className="pomodoro-time" id="pomodoro-time">
            60 : 00
        </div>
        <div className="pomodoro-tasks">Trabalho</div>
        <div className="pomodoro-buttons">
            <button id="start-button">Começar</button>
            <button id="pause-button">Pausar</button>
        </div>
        </div>
	}

	enableBtnPause(){
		this.btnPause.disabled = false
        this.btnPause.classList.remove('btnpause') 
	}

	disabledBtnPause(){
		this.btnPause.disabled = true
    	this.btnPause.classList.add('btnpause')
	}

	pauseTime = ()=>{
		
		 if(this.timeout){
		 	clearInterval(this.timeout)
		 	this.timeout = null
		 }
	}

	handleStartButton(){
		this.btnStart.addEventListener('click',this.startTime)
	}

	handlePauseTime(){
		this.btnPause.addEventListener('click',()=> {
			this.disabledBtnPause()
			this.pauseTime()
		})
	}

}

export default Chronometer