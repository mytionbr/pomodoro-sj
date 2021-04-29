const ApplicationSetting = () => {
  return (
    <div className="container_setting_aplication">
      <h2>Cor do tema:</h2>
      <div className="container_theme_option">
        <div className="theme_option" id="theme_pomodoro">
          <div className="theme_color"></div>
          <div className="title_option">Pomodoro</div>
        </div>
        <div className="theme_option" id="theme_short_break">
          <div className="theme_color"></div>
          <div className="title_option">Pausa curta</div>
        </div>
        <div className="theme_option" id="theme_long_break">
          <div className="theme_color"></div>
          <div className="title_option">Pausa longa</div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSetting;
