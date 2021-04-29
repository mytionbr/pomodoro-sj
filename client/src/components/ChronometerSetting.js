const ChronometerSetting = () => {
  return (
    <div>
      <div className="row">
        <div className="container-input">
          <input
            type="number"
            name="pomodoro-duration"
            id="pomodoro-duration"
          />
          <label htmlFor="pomodoro-duration">Pomodoro</label>
        </div>
        <div className="container-input">
          <input
            type="number"
            name="short-break-duration"
            id="short-break-duration"
          />
          <label htmlFor="short-break-duration">Pausa curta</label>
        </div>
      </div>
      <div className="row">
        <div className="container-input">
          <input
            type="number"
            name="long-break-duration"
            id="long-break-duration"
          />
          <label htmlFor="long-break-duration">Pausa longa</label>
        </div>
        <div className="container-input">
          <input type="number" name="cycle-pomodoro" id="cycle-pomodoro" />
          <label htmlFor="cycle-pomodoro">Ciclo</label>
        </div>
      </div>
    </div>
  );
};

export default ChronometerSetting;
