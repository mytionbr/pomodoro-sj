class Pomodoro{
	constructor(tempo){
		this._date = new Date();
		this._tempo = tempo;
		this._id = 0;
	}
	get tempo(){
		return this._tempo;
	}
	get date(){
		return this._date;
	}
	set idPomodoro(id){
		this._id = id;
	}
	get idPomodoro(){
		return this._id;
	}
}