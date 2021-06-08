import React from 'react'
import './TaskPane.css'
function TaskPane() {
    
    const CategoryInput = ()=>{
        return (
                <input type="text" className="category_input" name="category_input" placeholder="Categoria"></input>
        )
    }

    const TaskInput = ()=>{
        return (
                <input type="text" className="category_input" name="category_input" placeholder="Categoria"></input>
        )
    }

    const ButtonInput = ()=>{
        return (
                <input type="button" value="Send Request" className="category_input" ></input>
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
