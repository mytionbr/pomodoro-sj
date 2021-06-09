import React,{useState} from 'react'
import './TaskPane.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faCheck} from "@fortawesome/free-solid-svg-icons";


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
               
       const [done,setDone] = useState(props.done)
       
       let {tasks,setTasks} = props
       
        const handleChanceValue = (name,event,key)=>{
            let value = event.target.value
            let index = 0
    
           
            let result = tasks.filter((task,i) => {
               
                if (task.id === key){
                    
                    index = i
                    return true
                } else return false
    
    
            })
            let task = result[0]
            task[name] = value
            
            let newTaskList = [...tasks]
    
            newTaskList[index] = task
            
            setTasks(newTaskList)
            
        }
        
        const handleChangeDone = (event,key)=>{
            let index = 0
            console.log(done)
            
            let result = tasks.filter((task,i) => {
                if (task.id === key){
                    index = i
                    return true
                } else return false
            })

            let task = result[0]
            
            task.done = !done
            setDone(!done)
            
            
            let newTaskList = [...tasks]
    
            newTaskList[index] = task
            
            setTasks(newTaskList)
       
       
            
        }
        
        return (<li  className="task_item" >
            <input 
                type="text" 
                className="task_item_category" 
                value={props.category} 
                key={'category'}
                onChange={(event)=>handleChanceValue('category',event,props.id)}/>

            <input 
                type="text" 
                className="task_item_description" 
                value={props.description}
                key={'description'} 
                onChange={(event)=>handleChanceValue('description',event,props.id)}/>
            
            <input 
                type="number" 
                className="task_item_session" 
                value={props.session} 
                key={'session'}
                onChange={(event)=>handleChanceValue('session',event,props.id)}/>
            
            <button 
                type="button" 
                className="task_item_done" 
                onClick={(event)=>handleChangeDone(event,props.id)}>
                    {props.done ?  <FontAwesomeIcon className="task_item_done_icon" icon={faCheck} /> : ''}
            </button>
        </li>)
    }

    const TaskList = ({tasks,setTasks})=>{
        return (
            <ul className="task_list" key={tasks.length}>
                {tasks.map(task => {
                    return <Task 
                                id={task.id}
                                category={task.category} 
                                description={task.description}
                                session={task.session}
                                done={task.done}
                                key={task.id}
                                tasks={tasks}
                                setTasks={setTasks}
                                />
                    
                })}
            </ul>
        )
    }



const  TaskPane = ()=> {
    
    let [tasks,setTasks] = useState([
        {
            id:'1',
            category: "Faculdade",
            description:"Trabalho de contabilidade",
            session:"10",
            done:false
        },
        {
            id:'2',
            category: "Faculdade",
            description:"Trabalho de contabilidade",
            session:"4",
            done:false
        },
        {
            id:'3',
            category: "Faculdade",
            description:"Trabalho de contabilidade",
            session:"4",
            done:false
        },
       
    ])

   
       
    return (
        <div className="task_container">
            <TaskHeaderContainer/>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default TaskPane
