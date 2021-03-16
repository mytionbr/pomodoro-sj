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
		
        if(!this.timeout){
			this.timeout = setInterval(()=>{
			(this.minute == 0) ? ((this.second == 0) ? (this.pauseTime(this.timeout),this.modeManager.changeMode()) : this.second-- ) 
							: (this.second == 0) ? (this.minute--,this.second='59') : this.second--
			console.log()
			this.time.innerHTML = `${(this.minute < 10 && typeof this.minute === 'number' )? "0"+this.minute : this.minute} : ${(this.second < 10 && typeof this.minute === 'number' )? "0"+this.second : this.second}` 
		
			},100) 
		}
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