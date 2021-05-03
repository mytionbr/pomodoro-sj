export default class  ColorManager{
    constructor(settings,dispatch){
        
    	this.style = document.documentElement.style
		this.settings = settings
        this.dispatch = dispatch
        console.log()
    }

   changeBackground = (mode)=>{
        switch (mode) {
            case 'pomodoro':
                this.style.setProperty('--main-color',this.settings.pomodoro.background.primary)
                this.style.setProperty('--main-color-effect',this.settings.pomodoro.background.secondary)
                break;
            case 'shortBreak':
                this.style.setProperty('--main-color',this.settings.shortBreak.background.primary)
                this.style.setProperty('--main-color-effect',this.settings.shortBreak.background.secondary)
                break;
            case 'longBreak':
                this.style.setProperty('--main-color',this.settings.longBreak.background.primary)
                this.style.setProperty('--main-color-effect',this.settings.longBreak.background.secondary)
                break;
            default:
                break;
        }
    }

    chooseAnotherTheme = (mode,color)=>{
        switch (mode) {
            case 'pomodoro':
                this.dispatch({
                    type:'updatePomodoro',
                    payload:{
                        ...this.settings.pomodoro,
                        background:{
                                primary:color,
                                secondary:`lighten(${color},50%)`                           }}
                    }) 
                    console.log(this.settings)
                break;
            case 'shortBreak':
                this.dispatch({
                    type:'updateShortBreak',
                    payload:{
                        ...this.settings.shortBreak,
                        background:{
                                primary:color,
                                secondary:`lighten(${color},50%)`                           }}
                    }) 
                break;
            case 'longBreak':
                this.dispatch({
                    type:'updateLongBreak',
                    payload:{
                        ...this.settings.longBreak,
                        background:{
                                primary:color,
                                secondary:`lighten(${color},50%)`                           }}
                    }) 
                break;
            default:
                break;
        }
    }
}