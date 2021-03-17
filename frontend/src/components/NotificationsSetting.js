const NotificationsSetting = {
    render: () =>{
        return `
            <div class='container_settings_notifications'>
                <div class='row'>
                    <div class="container_input">
                        <label class="label_input" for='activate_alarm'>Ativar alarme:</label>
                        <label class="switch">
                            <input type='checkbox'name='activate_alarm' id="activate_alarm"> 
                            <span class="slider round"></span>
                        </label>

                    </div>
                    <div class="container_input">
                        <label class="label_input" for='activate_alarm'>Ativar notificação:</label>
                        <label class="switch">
                            <input type='checkbox'name='activate_alarm' id="activate_alarm"> 
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div class='row'>
                <div class="container_input">
                        <label class="label_input" for='activate_alarm'>Toque da notificação:</label>
                        <div class="select_sound">
                            <select>
                                <option value="0">Select car:</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
                
            `
    }
} 

export default NotificationsSetting