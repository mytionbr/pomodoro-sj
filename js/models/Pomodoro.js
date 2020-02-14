class Pomodoro{
	constructor(tempo,data){
		this._data = new Date(date.getTime());
		this._tempo = tempo;
	}
	get tempo(){
		return this._tempo;
	}
	get data(){
		return this._data.getTime();
	}
}