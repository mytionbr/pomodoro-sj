class ControllerPomodoro {
	constructor(){
		/*Creating a copy of Jquery*/
		let $ = document.querySelector.bind(document);

		this._fieldTime = $("#time");
	}
	_startTime(){
			let time = this._fieldTime.innerHTML;
			console.log(this._fieldTime.innerHTML);
			let stopWatch = setInterval(function(){
			 time--;
			
			document.querySelector("#time").innerHTML = time;
			console.log(time);
			if (time < 1) {
				clearInterval(stopWatch);
			}
		},1000);
	}
}