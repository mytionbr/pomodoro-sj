import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs,faTasks,faUser } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
   <div className="body">
      <div className="grid-container">
      <header>
        <div className="brand">
          <a href="/#/"><h1>Pomodoro-SJ</h1></a>
        </div>
        <nav className="links">
          <ul>
            <li><a href="/#/configuracoes/cronometro"> <i><FontAwesomeIcon icon={faCogs} /></i> Configurações</a></li>
            <li><a href="/#/tarefas"> <i><FontAwesomeIcon icon={faTasks} /></i> Tarefas</a></li>
            <li><a href="/#/usuario"><i><FontAwesomeIcon icon={faUser} /></i>  Usuário</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-container">
      </main>
      <footer>© 2021 Pomodoro-SJ, Inc</footer>
    </div>
  </div>
  );
}

export default App;
