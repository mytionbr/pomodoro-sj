import React, { useState,useEffect,useRef } from "react";
import "./TaskPane.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCheck,
  faEllipsisH,
  faMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const OptionsPopup = ({ incrementSession, decrementSession, removeTask,innerRef }) => {
  return (
    <div className="task_options_popup" ref={innerRef}>
      <button className="task_option" onClick={incrementSession}>
        <FontAwesomeIcon className="task_option_icon" icon={faPlus} />
        Adicionar
      </button>
      <button className="task_option" onClick={decrementSession}>
        <FontAwesomeIcon className="task_option_icon" icon={faMinus} />
        Remover
      </button>
      <button className="task_option" onClick={removeTask}>
        <FontAwesomeIcon className="task_option_icon" icon={faTrash} />
        Excluir
      </button>
    </div>
  );
};

const Options = ({ incrementSession, decrementSession, removeTask }) => {
  const [open, setOpen] = useState(false);
  const node = useRef(null)

  const handleOpenOptions = () => {
    setOpen(true)
  };

  

  const handleClickOutside = e =>{
    if(node.current && node.current.contains(e.target)){
      return
    }
    
    setOpen(false)
  }

  useEffect(()=>{
    document.addEventListener("mousedown",handleClickOutside)
    return ()=>{
      document.removeEventListener("mousedown",handleClickOutside)
    }
  },[])
 

  return (
    <div >
      <button className="task_options_btn"
        onClick={handleOpenOptions}>
        <FontAwesomeIcon
          className="task_item_done_options"
          icon={faEllipsisH}
        />
      </button>
      {open ? (
        <OptionsPopup
          incrementSession={incrementSession}
          decrementSession={decrementSession}
          removeTask={removeTask}
          innerRef={node}
        />
      ) : (
        ""
      )}
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

  const handleChangeDone = (task, newTaskList) => {
    task.done = !done;
    setDone(!done);
    saveTasks(newTaskList);
  };

  const incrementSession = (task, newTaskList) => {
    task.session = String(Number(task.session) + 1);
    saveTasks(newTaskList);
  };

  const decrementSession = (task, newTaskList) => {
    task.session = String(Number(task.session) - 1);
    saveTasks(newTaskList);
  };

  const removeTask = (index, newTaskList) => {
    newTaskList.splice(index, 1);
    saveTasks(newTaskList);
  };

  const saveTasks = (newTaskList) => {
    setTasks(newTaskList);
  };

  const triggerAction = (task, index, newTaskList, action) => {
    switch (action) {
      case "decrementSession":
        decrementSession(task, newTaskList);
        break;
      case "incrementSession":
        incrementSession(task, newTaskList);
        break;
      case "handleChangeDone":
        handleChangeDone(task, newTaskList);
        break;
      case "removeTask":
        removeTask(index, newTaskList);
        break;
      default:
        break;
    }
  };

  const handleAction = (key, action) => {
    let index = 0;

    let task = tasks.find((task, i) => {
      if (task.id === key) {
        index = i;
        return true;
      } else return false;
    });

    let newTaskList = [...tasks];

    triggerAction(task, index, newTaskList, action);
  };

  return (
    <li className="task_item">
      {props.done ? <span className="task_item_line_through" /> : ""}
      <input
        type="text"
        className="task_item_category"
        value={props.category}
        key={"category"}
        onChange={(event) => handleChanceValue("category", event, props.id)}
        disabled={props.done ? true : false}
      />

      <input
        type="text"
        className="task_item_description"
        value={props.description}
        key={"description"}
        onChange={(event) => handleChanceValue("description", event, props.id)}
        disabled={props.done ? true : false}
      />

      <input
        type="number"
        className="task_item_session"
        value={props.session}
        key={"session"}
        onChange={(event) => handleChanceValue("session", event, props.id)}
        disabled={props.done ? true : false}
      />

      <button
        type="button"
        className="task_item_done"
        onClick={() => handleAction(props.id, "handleChangeDone")}
      >
        {props.done ? (
          <FontAwesomeIcon className="task_item_done_icon" icon={faCheck} />
        ) : (
          ""
        )}
      </button>

      <Options
        incrementSession={() => handleAction(props.id, "incrementSession")}
        decrementSession={() => handleAction(props.id, "decrementSession")}
        removeTask={() => handleAction(props.id, "removeTask")}
      />
    </li>
  );
};

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className="task_list">
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
      id: "0",
      category: "Trabalho",
      description: "Entregar relatorio",
      session: "4",
      done: false,
    },
    {
      id: "3",
      category: "Estudo",
      description: "Piano",
      session: "4",
      done: false,
    },
    {
      id: "4",
      category: "Lazer",
      description: "Exercicios fisicos",
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
