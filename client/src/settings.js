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
  },
  colorOptions:[
    "#d04643",
    "#3eb640",
    "#8c43d0",
    "#FC935F",
    "#216975",
    "#FD6977",
    "#FBB500",
    "#139C8D",
    "#E54313",
    "#9A658E",
    "#DA29A0",
    "#0A9BFC",
    "#EEAA66",
    "#23D5FE",
    "#848484",
    "#D4F49C",
    "#110A5C",
    "#242424",
    "#0D8B34",
    "#42953B",
    "#FFE27F",
    "#FB040D"
  ]
};

export default settings