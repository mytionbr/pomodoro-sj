class ControllerPomodoro {
	constructor(){
		/*Creating a copy of Jquery*/
		let $ = document.querySelector.bind(document);

		this._fieldTimeMinutes = $("#time-minutes");
		this._fieldTimeSeconds = $("#time-seconds");
	}
	_startTime(){
		let timeSeconds = this._fieldTimeSeconds.innerHTML;
		let timeMinutes = this._fieldTimeMinutes.innerHTML;
		console.log(timeMinutes);
		let stopWatch = setInterval(function(){

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
}