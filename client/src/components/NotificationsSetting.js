const NotificationsSetting = () => {
  return (
    <div className="container_settings_notifications">
      <div className="row">
        <div className="container_input">
          <label className="label_input" htmlFor="activate_alarm">
            Ativar alarme:
          </label>
          <label className="switch">
            <input type="checkbox" name="activate_alarm" id="activate_alarm" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="container_input">
          <label className="label_input" htmlFor="activate_alarm">
            Ativar notificação:
          </label>
          <label className="switch">
            <input type="checkbox" name="activate_alarm" id="activate_alarm" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="row">
        <div className="container_input">
          <label className="label_input" htmlFor="activate_alarm">
            Toque da notificação:
          </label>
          <div className="select_sound">
            <select>
              <option value="0">Select car:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSetting;
