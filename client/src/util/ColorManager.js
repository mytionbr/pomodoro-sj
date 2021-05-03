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
                                secondary:this.LightenDarkenColor(color,-15)                         }}
                    }) 
                
                break;
            case 'shortBreak':
                this.dispatch({
                    type:'updateShortBreak',
                    payload:{
                        ...this.settings.shortBreak,
                        background:{
                                primary:color,
                                secondary:this.LightenDarkenColor(color,-15)                          }}
                    }) 
                break;
            case 'longBreak':
                this.dispatch({
                    type:'updateLongBreak',
                    payload:{
                        ...this.settings.longBreak,
                        background:{
                                primary:color,
                                secondary:this.LightenDarkenColor(color,-15)                           }}
                    }) 
                    
                break;
            default:
                break;
        }
        this.updateSelectedTheme(mode,color)

    }

    updateSelectedTheme(mode,color){
        if(mode === this.settings.sessions.currentSession){
            this.style.setProperty('--main-color',color)
            this.style.setProperty('--main-color-effect',this.LightenDarkenColor(color,-15))
        }
    }

    LightenDarkenColor(col, amt) {
  
        let usePound = false;
      
        if (col[0] === "#") {
            col = col.slice(1);
            usePound = true;
        }
     
        let num = parseInt(col,16);
     
        let r = (num >> 16) + amt;
     
        if (r > 255) r = 255;
        else if  (r < 0) r = 0;
     
        let b = ((num >> 8) & 0x00FF) + amt;
     
        if (b > 255) b = 255;
        else if  (b < 0) b = 0;
     
        let g = (num & 0x0000FF) + amt;
     
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
     
        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
         
         
    }
}