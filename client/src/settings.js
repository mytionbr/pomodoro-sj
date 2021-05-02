const settings = {
  pomodoro: {
    type: "pomodoro",
    time: {
      minute: "25",
      second: "00",
    },
    background: {
      primary: "#d04643",
      secondary: "#e83633",
    },
  },
  shortBreak: {
    type: "shortBreak",
    time: {
      minute: "5",
      second: "00",
    },
    background: {
      primary: "#3eb640",
      secondary: "#39a33b",
    },
  },
  longBreak: {
    type: "longBreak",
    time: {
      minute: "10",
      second: "00",
    },
    background: {
      primary: "#8c43d0",
      secondary: "#7f40b9",
    },
  },
  sessions:{
    type:'sessions',
    currentSession:'pomodoro',
    longBreakSessions:'4',
    sessionsDone: 0
  }
};

export default settings