class Time{
	constructor(modesController){
		this.timeout = null
	}

	pauseCount(){
		this.timeout ? clearInterval(timeout) : ''
	}

	countFinished(){

		pauseCount()

	}

	startTime(time,{minute,second}){
		this.timeout = setInterval(()=>{
	        (minute == 0) 
	        		? ((second == 0) 
	        		? (pauseCount()) : second-- ) : (second == 0) 
	        		? (minute--,second='59') : second--
	                        
	        time.innerHTML = `${(minute < 10)? "0"+minute : minute} : ${(second < 10)? "0"+second : second}` 
	    
	    },100) 
	}
}



