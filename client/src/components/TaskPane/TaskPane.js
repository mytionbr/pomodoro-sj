import React from 'react'
import './TaskPane.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from "@fortawesome/free-solid-svg-icons";
function TaskPane() {
    
    const tasks = [
        {
            taskId:'1',
            categoryField: "Faculdade",
            descriptionField:"Trabalho de contabilidade",
            sessionField:"10",
            doneField:false
        },
        {
            taskId:'2',
            categoryField: "Faculdade",
            descriptionField:"Trabalho de contabilidade",
            sessionField:"4",
            doneField:false
        },
        {
            taskId:'3',
            categoryField: "Faculdade",
            descriptionField:"Trabalho de contabilidade",
            sessionField:"4",
            doneField:false
        },
       
    ] 

    const CategoryInput = ()=>{
        return (
                <input type="text" className="category_input" name="category_input" placeholder="Categoria"></input>
        )
    }

    const TaskInput = ()=>{
        return (
                <input type="text" className="description_input" name="description_input" placeholder="Escreva uma tarefa"></input>
        )
    }

    const ButtonInput = ()=>{
        return (
                <button type="button" className="button_input" >
                     <FontAwesomeIcon icon={faPlus} />
                </button>
        )
    }

    const TaskHeaderContainer = ()=>{
        return (
            <div className="task_header_container">
                <form>
                    <CategoryInput />
                    <TaskInput/>
                    <ButtonInput/>
                </form>
            </div>
        )
    }

    const Task =(props)=>{
        return <li className="task_item" key={props.id}>
            <input 
                type="text" 
                className="task_item_category" 
                value={props.category} />

            <input 
                type="text" 
                className="task_item_description" 
                value={props.description} />
            
            <input 
                type="number" 
                className="task_item_session" 
                value={props.session} />
            
            <input 
                type="button" 
                className="task_item_done" 
                value={props.done ? "V" : ''} />
        </li>
    }

    const TaskList = ({tasks})=>{
        return (
            <ul className="task_list">
                {tasks.map(task => {
                    return <Task 
                                id={task.id}
                                category={task.categoryField} 
                                description={task.descriptionField}
                                session={task.sessionField}
                                done={task.doneField}/>
                    
                })}
            </ul>
        )
    }
    
    return (
        <div className="task_container">
            <TaskHeaderContainer/>
            <TaskList tasks={tasks}/>
        </div>
    )
}

export default TaskPane
