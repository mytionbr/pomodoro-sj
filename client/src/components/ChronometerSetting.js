import { useState } from "react";

const ChronometerSetting = ({ settings, dispatch }) => {
  const handleChangePomodoroTime = (e) => {
    let value = e.target.value;
    if (value === "" || value === "0") {
      dispatch({
        type: "updatePomodoro",
        payload: {...settings.pomodoro, time: { minute: value, second: "59" } },
      });
    } else {
      dispatch({
        type: "updatePomodoro",
        payload: {...settings.pomodoro, time: { minute: value, second: "00" } },
      });
    }
  };

  const handleChangeShortBreakTime = (e) => {
    let value = e.target.value;
    if (value === "" || value === "0") {
      dispatch({
        type: "updateShortBreak",
        payload: { ...settings.shortBreak,time: { minute: value, second: "59" } },
      });
    } else {
      dispatch({
        type: "updateShortBreak",
        payload: { ...settings.shortBreak, time: { minute: value, second: "00" } },
      });
    }
  };

  const handleChangeLongBreakTime = (e) => {
    let value = e.target.value;
    if (value === "" || value === "0") {
      dispatch({
        type: "updateLongBreak",
        payload: {...settings.longBreak, time: { minute: value, second: "59" } },
      });
    } else {
      dispatch({
        type: "updateLongBreak",
        payload: {...settings.longBreak, time: { minute: value, second: "00" } },
      });
    }
  };

  const handleChangeSession = (e) => {
    let value = e.target.value;
   
      dispatch({
        type: "updateSessions",
        payload: {...settings.sessions,longBreakSessions: value },
      })
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
