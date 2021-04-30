import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faTasks, faUser } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import TasksScreen from "./screens/TasksScreen";
import UserScreen from "./screens/UserScreen";
import Error404 from "./screens/Error404";

import inititalSettings from "./settings";

function App() {
  const [settings, setSettings] = useState(inititalSettings);

  return (
    <Router>
      <div className="grid-container">
        <header>
          <div className="brand">
            <Link to="/">
              <h1>Pomodoro-SJ</h1>
            </Link>
          </div>
          <nav className="links">
            <ul>
              <li>
                <Link to={"/configuracoes/cronometro"}>
                  <i>
                    <FontAwesomeIcon icon={faCogs} />
                  </i>{" "}
                  Configurações
                </Link>
              </li>
              <li>
                <Link to={"/tarefas"}>
                  <i>
                    <FontAwesomeIcon icon={faTasks} />
                  </i>{" "}
                  Tarefas
                </Link>
              </li>
              <li>
                <Link to={"/usuario"}>
                  <i>
                    <FontAwesomeIcon icon={faUser} />
                  </i>{" "}
                  Usuário
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-container">
          <Switch>
            <Route exact path={["/", "/home"]}>
              <HomeScreen settings={settings} setSettings={setSettings} />
            </Route>
            <Route exact path="/tarefas">
              <TasksScreen />
            </Route>
            <Route exact path="/usuario">
              <UserScreen />
            </Route>
            <Route
              path="/configuracoes/:setting"
              render={(props) => (
                <SettingsScreen
                  settings={settings}
                  setSettings={setSettings}
                  {...props}
                />
              )}
            />
            <Route path="*" component={Error404} />
          </Switch>
        </main>
        <footer>© 2021 Pomodoro-SJ, Inc</footer>
      </div>
    </Router>
  );
}

export default App;
