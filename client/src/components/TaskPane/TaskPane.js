import React, { useState, useEffect } from "react";
import "./TaskPane.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCheck,
  faEllipsisH,
  faMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const OptionsPopup = ({incrementSession,decrementSession}) => {
  return (
    <div className="task_options_popup">
      <button className="task_option" onClick={incrementSession}>
        <FontAwesomeIcon className="task_option_icon" icon={faPlus} />
        Adicionar
      </button>
      <button className="task_option" onClick={decrementSession}>
        <FontAwesomeIcon className="task_option_icon" icon={faMinus} />
        Subtrair
      </button>
      <button className="task_option">
        <FontAwesomeIcon className="task_option_icon" icon={faTrash} />
        Excluir
      </button>
    </div>
  );
};

const Options = ({incrementSession,decrementSession}) => {
  const [open,setOpen] = useState(false)
  const handleOpenOptions = ()=>{
    setOpen(!open)
  }
  return (
    <div>
      <button className="task_options_btn">
        <FontAwesomeIcon
          className="task_item_done_options"
          icon={faEllipsisH}
          onClick={handleOpenOptions}
        />
      </button>
      {
        open 
        ? <OptionsPopup 
            incrementSession={incrementSession}
            decrementSession={decrementSession}/>
        : ''}
    </div>
  );
};

const CategoryInput = ({ category, handleChangeValue }) => {
  return (
    <input
      type="text"
      className="category_input"
      name="category_input"
      placeholder="Categoria"
      value={category}
      onChange={(event) => handleChangeValue("category", event)}
    ></input>
  );
};

const TaskInput = ({ description, handleChangeValue }) => {
  return (
    <input
      type="text"
      className="description_input"
      name="description_input"
      placeholder="Escreva uma tarefa"
      value={description}
      onChange={(event) => handleChangeValue("description", event)}
    ></input>
  );
};

const ButtonInput = ({ createNewTask }) => {
  return (
    <button
      type="button"
      className="button_input"
      onClick={() => createNewTask()}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

const TaskHeaderContainer = ({ tasks, setTasks }) => {
  const [category, setCategory] = useState("");

  const [description, setDescription] = useState("");

  const createNewTask = () => {
    let task = {
      id: String(Math.floor(Math.random() * 10000)),
      category: category,
      description: description,
      session: "1",
      done: false,
    };

    let newTasks = [...tasks];
    newTasks.unshift(task);
    setTasks(newTasks);
    clearFilds();
  };

  const clearFilds = () => {
    setCategory("");
    setDescription("");
  };

  const handleChangeValue = (name, event) => {
    let value = event.target.value;

    if (name === "description") {
      setDescription(value);
    } else {
      setCategory(value);
    }
  };

  return (
    <div className="task_header_container">
      <form>
        <CategoryInput
          category={category}
          handleChangeValue={handleChangeValue}
        />
        <TaskInput
          description={description}
          handleChangeValue={handleChangeValue}
        />
        <ButtonInput createNewTask={createNewTask} />
      </form>
    </div>
  );
};

const Task = (props) => {
  const [done, setDone] = useState(props.done);

  let { tasks, setTasks } = props;

  const handleChanceValue = (name, event, key) => {
    let value = event.target.value;
    let index = 0;

    let result = tasks.filter((task, i) => {
      if (task.id === key) {
        index = i;
        return true;
      } else return false;
    });
    let task = result[0];
    task[name] = value;

    let newTaskList = [...tasks];

    newTaskList[index] = task;

    setTasks(newTaskList);
  };

  const handleChangeDone = (task) => {
    task.done = !done;
    setDone(!done);

  };

  const incrementSession = (task)=>{
    task.session = String(Number(task.session) + 1);
  }
  
  const decrementSession = (task)=>{
    task.session = String(Number(task.session) - 1);
  }

  const triggerAction = (task,action)=>{
    switch (action) {
      case 'decrementSession':
        decrementSession(task)
        break;
        case 'incrementSession':
          incrementSession(task)
        break;
        case 'handleChangeDone':
          handleChangeDone(task)
        break;
      default:
        break;
    }
  }
  
  const handleAction = (key,action)=>{
    let index = 0

    let result = tasks.filter((task, i) => {
      if (task.id === key) {
        index = i;
        return true;
      } else return false;
    });

    let task = result[0];

    triggerAction(task,action)

    let newTaskList = [...tasks];

    newTaskList[index] = task;

    setTasks(newTaskList);
  }

  return (
    <li className="task_item">
      {props.done ? <span className="task_item_line_through" /> : ""}
      <input
        type="text"
        className="task_item_category"
        value={props.category}
        key={"category"}
        onChange={(event) => handleChanceValue("category", event, props.id)}
      />

      <input
        type="text"
        className="task_item_description"
        value={props.description}
        key={"description"}
        onChange={(event) => handleChanceValue("description", event, props.id)}
      />

      <input
        type="number"
        className="task_item_session"
        value={props.session}
        key={"session"}
        onChange={(event) => handleChanceValue("session", event, props.id)}
      />

      <button
        type="button"
        className="task_item_done"
        onClick={() => handleAction(props.id,'handleChangeDone')}
      >
        {props.done ? (
          <FontAwesomeIcon className="task_item_done_icon" icon={faCheck} />
        ) : (
          ""
        )}
      </button>

      <Options  
        incrementSession={()=>handleAction(props.id,'incrementSession')} 
        decrementSession={()=>handleAction(props.id,'decrementSession')}
        />
    </li>
  );
};

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className="task_list" key={tasks.length}>
      {tasks.map((task) => {
        return (
          <Task
            id={task.id}
            category={task.category}
            description={task.description}
            session={task.session}
            done={task.done}
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      })}
    </ul>
  );
};

const TaskPane = () => {
  let [tasks, setTasks] = useState([
    {
      id: "1",
      category: "Faculdade",
      description: "Trabalho de contabilidade",
      session: "10",
      done: false,
    },
    {
      id: "2",
      category: "Faculdade",
      description: "Trabalho de contabilidade",
      session: "4",
      done: false,
    },
    {
      id: "3",
      category: "Faculdade",
      description: "Trabalho de contabilidade",
      session: "4",
      done: false,
    },
  ]);

  return (
    <div className="task_container">
      <TaskHeaderContainer tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskPane;
