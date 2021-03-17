const ChronometerSetting = {
    render: () =>{
        return `
                
                <div class="row">
                <div class="container-input">
                    <input type="number" name="pomodoro-duration" id="pomodoro-duration">
                    <label for="pomodoro-duration">Pomodoro</label>
                </div>  
                <div class="container-input">
                    <input type="number" name="short-break-duration" id="short-break-duration">
                    <label for="short-break-duration">Pausa curta</label>
                </div>
            </div> 
            <div class="row"> 
                <div class="container-input">
                    <input type="number" name="long-break-duration" id="long-break-duration">
                    <label for="long-break-duration">Pausa longa</label>
                </div>
                <div class="container-input">
                    <input type="number" name="cycle-pomodoro" id="cycle-pomodoro">
                    <label for="cycle-pomodoro">Ciclo</label>
                </div>
            </div>
            `
    }
} 

export default ChronometerSetting