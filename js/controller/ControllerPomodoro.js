class ControllerPomodoro {
	constructor(){
		/*Creating a copy of Jquery*/
		let $ = document.querySelector.bind(document);
		this._fieldTimeMinutes = $("#time-minutes");
		this._fieldTimeSeconds = $("#time-seconds");
		this._id = null;
		this._button = document.querySelector(".btn-warning:nth-of-type(1)");
	}


	startTime(){
		let timeSeconds = this._fieldTimeSeconds.innerHTML;
		let timeMinutes = this._fieldTimeMinutes.innerHTML;
		
		this._button.removeAttribute("id","start");
		this._button.removeAttribute("onclick","controllerPomodoro.startTime()");
		this._button.setAttribute("onclick","controllerPomodoro.pauseButton()");
		this._button.setAttribute("id","pause");
		this._button.textContent = "Pause";
		this._id = setInterval(function(){
			
			if (timeSeconds < 1) {
				timeMinutes--;
				document.querySelector("#time-minutes").innerHTML = timeMinutes;
			}
			if (timeSeconds < 1) {
				timeSeconds = 59;
			}
			timeSeconds--;
			if (timeSeconds >= 0) {
				document.querySelector("#time-seconds").innerHTML = timeSeconds;
			}
			if (timeMinutes == 0 && timeSeconds < 1 ) {
				clearInterval(stopWatch);
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
		this._fieldTimeMinutes.textContent = "5";
		this._fieldTimeSeconds.textContent = "00";
	}

}