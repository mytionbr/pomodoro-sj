import React from 'react'
import './TaskPane.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from "@fortawesome/free-solid-svg-icons";
function TaskPane() {
    
    const CategoryInput = ()=>{
        return (
                <input type="text" className="category_input" name="category_input" placeholder="Categoria"></input>
        )
    }

    const TaskInput = ()=>{
        return (
                <input type="text" className="task_input" name="task_input" placeholder="Escreva uma tarefa"></input>
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
    
    return (
        <div>
            <TaskHeaderContainer/>
        </div>
    )
}

export default TaskPane
