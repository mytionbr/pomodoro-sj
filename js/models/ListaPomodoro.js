class ListaPomodoro{
	constructor(){
		this._pomodoros = [];
		this._totalTime = 0;
		this._totalMinutes = 0;
		this._totalSeconds = 0;
		this._time = [];
	}
	add(pomodoro){
		pomodoro.idPomodoro = this._pomodoros.length + 1;
		this._pomodoros.push(pomodoro);
		this.calculateTotalTime();
	}
	get pomodoros(){
		return [].concat(this._pomodoros);
	}
	calculateTotalTime(){
		// this._pomodoros.map((n, indice) => {
		// 	this._time = n.tempo.split(":");
		// 	this._totalMinutes += parseInt(this._time[indice]);
		// 	this._totalSeconds += parseInt(this._time[indice+1]);
		// 	this._time = [];
		// 	console.log(this._totalSeconds);
		// 	});
		this._totalSeconds = 0;
		this._totalMinutes = 0;
			this._pomodoros.map(n =>{
				this._time = n.tempo.split(":");

				this._totalMinutes += parseInt(this._time[0]);
				this._totalSeconds += parseInt(this._time[1]);
				this._time = [];
				console.log(this._totalSeconds);

			});
			
		}
		get totalMinutes(){
			return this._totalMinutes;
		}
		get totalSeconds(){
			return this._totalSeconds;
		}

	}