class ControllerPomodoro {
	constructor(){
		/*Creating a copy of Jquery*/
		let $ = document.querySelector.bind(document);

		this._fieldTimeMinutes = $("#time-minutes");
		this._fieldTimeSeconds = $("#time-seconds");
		this._timeStart = $("#tempoStart");
		this._timePause = $("#tempoPause");
		this._backgraund = $(".container");

		
		this._breakTime = [5,0];
		this._session = 0;

		this._id = null;
		this._time = this.time();
		this._button = document.querySelector(".btn-warning:nth-of-type(1)");
		this._pomodoroList = new ListaPomodoro();
		this._pomodoroView = new PomodoroView($("#tabelaArea"));
		this._pomodoroView.update(this._pomodoroList);
	}


	startTime(){
		let timeSeconds = this._fieldTimeSeconds.innerHTML;
		let timeMinutes = this._fieldTimeMinutes.innerHTML;
		
		this._button.removeAttribute("id","start");
		this._button.removeAttribute("onclick","controllerPomodoro.startTime()");
		this._button.setAttribute("onclick","controllerPomodoro.pauseButton()");
		this._button.setAttribute("id","pause");
		this._button.textContent = "Pause";
		this._session ++;



		this._id = setInterval(() =>{
			
			if (timeSeconds < 1) {
				timeMinutes--;
				document.querySelector("#time-minutes").innerHTML = timeMinutes;
			}
			if (timeSeconds < 1) {
				timeSeconds = 60;
			}
			timeSeconds--;
			if (timeSeconds >= 0) {
				document.querySelector("#time-seconds").innerHTML = timeSeconds;
			}
			
			if ((timeMinutes == 0 && timeSeconds < 1) && (this._session % 2 != 0)) {	

				this._pomodoroList.add(this.createPomodoro());
				this._pomodoroView.update(this._pomodoroList);
				this.pauseTime();
				this.pauseButton();
				this._backgraund.removeAttribute("class","container telaInicial");
				this._backgraund.setAttribute("class","container telaPausa");
				this.triggerSound();
			}
			if ((timeMinutes == 0 && timeSeconds < 1) && (this._session % 2 == 0)) {	
				
				this.restart();
				// contrapor o efeito do button reiniciar
				this._session ++;
				this._backgraund.removeAttribute("class","container telaPausa");
				this._backgraund.setAttribute("class","container telaInicial");
				this.triggerSound();
				clearInterval(this._id);
				
			}
		},1000);

		
	}
	pauseButton(){
		this._button.removeAttribute("id","pause");
		this._button.removeAttribute("onclick","controllerPomodoro.pauseButton()");
		this._button.setAttribute("onclick","controllerPomodoro.startTime()");
		this._button.setAttribute("id","pause");
		let buttonPause = document.querySelector("#pause");
		this._button.textContent = "Iniciar";
		clearInterval(this._id);

	}
	restart(){
		this.pauseButton();
		this._fieldTimeMinutes.textContent = this._time[0];
		this._fieldTimeSeconds.textContent = this._time[1];
		// contrapor o efeito do button reiniciar
		this._session --;
	}
	form(event){
		event.preventDefault();
		this._time = this._timeStart.value.split(':');
		this._fieldTimeMinutes.innerHTML = this._time[0];
		this._fieldTimeSeconds.innerHTML = this._time[1];
		
		this._breakTime = this._timePause.value.split(':');

		this.zeraForm();
		this.pauseButton()
	}
	zeraForm(){
		this._timeStart.value = "00:00";
		this._timePause.value = "00:00";
	}
	time(){
		let time = [];
		time[0] = this._fieldTimeMinutes.innerHTML;
		time[1] = this._fieldTimeSeconds.innerHTML;
		return time;
	}
	createPomodoro(){
		return new Pomodoro((this._time[0] + ":" + this._time[1]));
	}
	pauseTime(){
		this._fieldTimeMinutes.textContent = this._breakTime[0];
		this._fieldTimeSeconds.textContent = this._breakTime[1];
	}
	triggerSound(){
		document.querySelector("#alerta").play();
	}

}