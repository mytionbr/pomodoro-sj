const ApplicationSetting = {
    render: () =>{
        return `
                <div class='container_setting_aplication'>
                    <h2>Cor do tema:</h2>
                    <div class="container_theme_option">
                        <div class="theme_option" id="theme_pomodoro">
                            <div class="theme_color">
                                
                            </div>
                            <div class="title_option">
                                Pomodoro
                            </div>
                        </div>
                        <div class="theme_option" id="theme_short_break">
                            <div class="theme_color">
                                
                            </div>
                            <div class="title_option">
                                Pausa curta
                            </div>
                        </div>
                        <div class="theme_option" id="theme_long_break">
                            <div class="theme_color">
                                
                            </div>
                            <div class="title_option">
                                Pausa longa
                            </div>
                        </div>
                    </div>
                </div>
            `
    }
} 

export default ApplicationSetting