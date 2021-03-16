const SettingsView = {
    render: () => {
        return `
        <div class="container-config">
        <div class="menu-config">
            <div class="menu-section" id="option-chronometer"><i class="fas fa-stopwatch"></i> Cronômetro</div>
            <div class="menu-section" id="option-aplication"><i class="fas fa-desktop"></i> Aplicação</div>
            <div class="menu-section" id="option-motifications"><i class="far fa-bell"></i> Notificações</div>
        </div>
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
    </div>
        `
    },
    afterRender(){

    }
}
export default SettingsView