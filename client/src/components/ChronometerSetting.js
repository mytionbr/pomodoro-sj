import { useState } from "react";

const ChronometerSetting = ({ settings, setSettings }) => {
  const [pomodoro, setPomodoro] = useState(settings.pomodoro);
  const [shortBreak, setShortBreak] = useState(settings.shortBreak);
  const [longBreak, setLongBreak] = useState(settings.longBreak);
  const [sessions, setSessions] = useState(settings.sessions);

  const handleChangePomodoroTime = async (e) => {
    await setPomodoro({ ...pomodoro, time: {minute: e.target.value, second: '00'} });
    await console.log(pomodoro.time.minute)
    if(e.target.value !== '0'){ saveSetting(pomodoro)}
  };

  console.log(sessions)

  const handleChangeShortBreakTime = (e) => {
    let value = e.target.value
    setShortBreak({ ...shortBreak, time: { minute: e.target.value,second:'00' } });
    if(value !== '0') saveSetting(shortBreak)
  };

  const handleChangeLongBreakTime = (e) => {
    let value = e.target.value
    setLongBreak({ ...longBreak, time: { minute: e.target.value, second:'00' } });
    if(value !== '0') saveSetting(longBreak)
  };

  const handleChangeSession = (e) => {
    let value = e.target.value
    setSessions({ ...sessions, longBreakSessions: e.target.value,second:'00' });
    if(value !== '0') saveSetting(sessions)
  };

  const saveSetting = (element)=>{
    setSettings({...settings,[element.type]:element})
  }

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
