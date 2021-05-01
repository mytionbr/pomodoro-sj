import { useState } from "react";

const ChronometerSetting = ({ settings, dispatch }) => {
  let pomodoro = settings.pomodoro
  let shortBreak = settings.shortBreak
  let longBreak = settings.longBreak
  let sessions = settings.sessions

  const handleChangePomodoroTime = (e) => {
    console.log(e.target.value)
    pomodoro = {
      ...pomodoro,
      time: { minute: e.target.value, second: "00" },
    }
       
    

    dispatch({ type: "updatePomodoro", payload: pomodoro });
  };

  const handleChangeShortBreakTime = (e) => {
    shortBreak = {
      ...shortBreak,
      time: { minute: e.target.value, second: "00" },
    };
    dispatch({ type: "updateShortBreak", payload: shortBreak });
  };

  const handleChangeLongBreakTime = (e) => {
    longBreak = {
      ...longBreak,
      time: { minute: e.target.value, second: "00" },
    };
    dispatch({ type: "updateLongBreak", payload: longBreak });
  };

  const handleChangeSession = (e) => {
    sessions = {
      ...sessions,
      longBreakSessions: e.target.value,
      second: "00",
    };
    dispatch({ type: "updateSessions", payload: sessions });
  };

  return (
    <div>
      <div className="row">
        <div className="container-input">
          <input
            type="number"
            name="pomodoro-duration"
            id="pomodoro-duration"
            value={pomodoro.time.minute}
            onChange={(e) => handleChangePomodoroTime(e)}
          />
          <label htmlFor="pomodoro-duration">Pomodoro</label>
        </div>
        <div className="container-input">
          <input
            type="number"
            name="short-break-duration"
            id="short-break-duration"
            value={shortBreak.time.minute}
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
            value={longBreak.time.minute}
            onChange={(e) => handleChangeLongBreakTime(e)}
          />
          <label htmlFor="long-break-duration">Pausa longa</label>
        </div>
        <div className="container-input">
          <input
            type="number"
            name="cycle-pomodoro"
            id="cycle-pomodoro"
            value={sessions.longBreakSessions}
            onChange={(e) => handleChangeSession(e)}
          />
          <label htmlFor="cycle-pomodoro">Ciclo</label>
        </div>
      </div>
    </div>
  );
};

export default ChronometerSetting;
