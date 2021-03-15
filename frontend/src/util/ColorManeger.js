export default class ColorManeger{
    constructor(){
        this.bgPomodoro = '#d04643'
        this.bgShortBreak = '#87D043'
        this.bgLongBreak = '#8C43D0'
    	this.style = document.documentElement.style
		this.bgs = {
            pomodoro:'var(--bg-red)', 
            shortBreak:'var(--bg-green)',
            longBreak:'var(--bg-purple)'
        }
    }

    changeBackground = (mode)=>{
        switch (mode) {
            case 'pomodoro':
                this.style.setProperty('--main-color',this.bgs.pomodoro)
                console.log('oisssssss')
                break;
            case 'shortBreak':
                this.style.setProperty('--main-color',this.bgs.shortBreak)
                break;
            case 'longBreak':
                this.style.setProperty('--main-color',this.bgs.longBreak)
                break;
            default:
                break;
        }
    }
}