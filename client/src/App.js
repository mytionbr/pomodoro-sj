import './App.css';

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
            <li><a href="/#/configuracoes/cronometro"> <i className="fas fa-cogs"></i> Configurações</a></li>
            <li><a href="/#/tarefas"> <i className="fas fa-tasks"></i> Tarefas</a></li>
            <li><a href="/#/usuario"><i className="fas fa-user"></i> Usuário</a></li>
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
