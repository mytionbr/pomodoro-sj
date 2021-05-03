export default class ColorManager{
    constructor(){
        this.bgPomodoro = '#d04643'
        this.bgShortBreak = '#87D043'
        this.bgLongBreak = '#8C43D0'
    	this.style = document.documentElement.style
		this.bgs = {
            pomodoro:{
                bg:'var(--bg-red)',
                effect:'var(--bg-red-dark)',
            }, 
            shortBreak:{
                bg:'var(--bg-green)',
                effect:'var(--bg-green-dark)'
            },
            longBreak:{
                bg:'var(--bg-purple)',
                effect:'var(--bg-purple-dark)'
            },
        }
    }

   changeBackground = (mode)=>{
        switch (mode) {
            case 'pomodoro':
                this.style.setProperty('--main-color',this.bgs.pomodoro.bg)
                this.style.setProperty('--main-color-effect',this.bgs.pomodoro.effect)
                break;
            case 'shortBreak':
                this.style.setProperty('--main-color',this.bgs.shortBreak.bg)
                this.style.setProperty('--main-color-effect',this.bgs.shortBreak.effect)
                break;
            case 'longBreak':
                this.style.setProperty('--main-color',this.bgs.longBreak.bg)
                this.style.setProperty('--main-color-effect',this.bgs.longBreak.effect)
                break;
            default:
                break;
        }
    }

    chooseAnotherTheme = (mode,color)=>{
        switch (mode) {
            case 'pomodoro':
                this.bgs.pomodoro.bg = color
                break;
            case 'shortBreak':
                this.bgs.shortBreak.bg = color
                break;
            case 'longBreak':
                this.bgs.longBreak.bg = color
                break;
            default:
                break;
        }
    }
}