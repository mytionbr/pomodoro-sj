import React, { useEffect, useState } from "react";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
const UserScreen = ({ match, settings, dispatch }) => {
 
  const initialScrean = "login";

  const [currentScreen, setCurrentScreen] = useState(initialScrean);

  useEffect(() => {
    setCurrentScreen(match.params.screen);
  });

  const getCurrentScreen = (current) => {
    console.log(current)
    switch (current) {
      case "login":
        return <Login />;
      case "registro":
        return <Register />;
      default:
        return <Login />;
    }
  };

  return (
    <div>
      {getCurrentScreen(currentScreen)}
    </div>
  );
};

export default UserScreen;
