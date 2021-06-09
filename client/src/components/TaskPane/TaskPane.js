import React, { useState } from "react";
import "./TaskPane.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const CategoryInput = ({ task, handleChangeValue }) => {
  

  return (
    <input
      type="text"
      className="category_input"
      name="category_input"
      placeholder="Categoria"
      value={task.category}
      onChange={(event)=>handleChangeValue('category',event)}
    ></input>
  );
};

const TaskInput = ({ task, handleChangeValue }) => {
  return (
    <input
      type="text"
      className="description_input"
      name="description_input"
      placeholder="Escreva uma tarefa"
      value={task.description}
      onChange={(event)=>handleChangeValue('description',event)}
    ></input>
  );
};

const ButtonInput = ({createNewTask}) => {
  return (
    <button type="button" className="button_input" onClick={()=>createNewTask()}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

const TaskHeaderContainer = ({tasks,setTasks}) => {
    const [task,setTask] = useState( {
        id: "",
        category: "",
        description: "",
        session: "",
        done: false,
      },)

    const createNewTask = ()=>{
        
        let newTasks = [...tasks]
        newTasks.push(task)
        setTasks(newTasks)
    }

    const handleChangeValue = (name,event)=>{
        let value = event.target.value
        setTask({...task,[name]:value})
    }

  return (
    <div className="task_header_container">
      <form>
        <CategoryInput task={task} handleChangeValue={handleChangeValue} />
        <TaskInput task={task} handleChangeValue={handleChangeValue} />
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

  const handleChangeDone = (key) => {
    let index = 0;
    console.log(done);

    let result = tasks.filter((task, i) => {
      if (task.id === key) {
        index = i;
        return true;
      } else return false;
    });

    let task = result[0];

    task.done = !done;
    setDone(!done);

    let newTaskList = [...tasks];

    newTaskList[index] = task;

    setTasks(newTaskList);
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
        onClick={() => handleChangeDone(props.id)}
      >
        {props.done ? (
          <FontAwesomeIcon className="task_item_done_icon" icon={faCheck} />
        ) : (
          ""
        )}
      </button>
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
