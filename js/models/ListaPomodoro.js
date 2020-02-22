class ListaPomodoro{
	constructor(){
		this._pomodoros = [];
		this._totalTime = 0;
	}
	add(pomodoro){
		pomodoro.idPomodoro = this._pomodoros.length + 1;
		this._totalTime + pomodoro.
		this._pomodoros.push(pomodoro);
	}
	get pomodoros(){
		return [].concat(this._pomodoros);
	}
	

}