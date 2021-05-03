import React from 'react'

function ThemeOption({color,mode,colorManager,close}) {

    const handleChoiceColor = ()=>{
        colorManager.chooseAnotherTheme(mode.type,color)
        close()
    }
    
    return (
        <div 
            className="color_option"
            style={{backgroundColor:color}}
            onClick={handleChoiceColor}
        ></div>
    )
}

export default ThemeOption
