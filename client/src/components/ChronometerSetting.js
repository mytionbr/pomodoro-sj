import { useState } from "react";

const ChronometerSetting = ({ settings, dispatch }) => {
  

  const handleChangePomodoroTime = (e) => {
    dispatch({ type: "updatePomodoro", payload: {time: { minute: e.target.value, second: "00" }} });
  };

  const handleChangeShortBreakTime = (e) => {
      dispatch({ type: "updateShortBreak", payload: {time: { minute: e.target.value, second: "00" }} });
  };

  const handleChangeLongBreakTime = (e) => {
    dispatch({ type: "updateLongBreak", payload: {time: { minute: e.target.value, second: "00" }} });
  };

  const handleChangeSession = (e) => {
    dispatch({ type: "updateSessions", payload: {longBreakSessions: e.target.value} });
  };

  return (
    <div>
      <div className="row">
        <div className="container-input">
          <input
            type="number"
            name="pomodoro-duration"
            id="pomodoro-duration"
            value={settings.pomodoro.time.minute}
            onChange={(e) => handleChangePomodoroTime(e)}
          />
          <label htmlFor="pomodoro-duration">Pomodoro</label>
        </div>
        <div className="container-input">
          <input
            type="number"
            name="short-break-duration"
            id="short-break-duration"
            value={settings.shortBreak.time.minute}
            onChange={(e) => handleChangeShortBreakTime(e)}
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
            value={settings.longBreak.time.minute}
            onChange={(e) => handleChangeLongBreakTime(e)}
          />
          <label htmlFor="long-break-duration">Pausa longa</label>
        </div>
        <div className="container-input">
          <input
            type="number"
            name="cycle-pomodoro"
            id="cycle-pomodoro"
            value={settings.sessions.longBreakSessions}
            onChange={(e) => handleChangeSession(e)}
          />
          <label htmlFor="cycle-pomodoro">Ciclo</label>
        </div>
      </div>
    </div>
  );
};

export default ChronometerSetting;
