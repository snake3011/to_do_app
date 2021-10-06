import "../../styles/TaskItem.scss";
import TaskTagList from "./TaskTagList";

function TaskItem(props) {
   
   // handles the task state change
   function changeTaskStateHandler() {
      props.changeTaskState(props.task);
   }

   return (
      <li>
         <div className="card">
            {/* HEADER */}
            <div className="card-header">
               <h5 className="card-title">{props.title}</h5>
            </div>

            {/* BODY */}
            <div className="card-body">           
               <TaskTagList tags={props.tags}></TaskTagList>

               <div className="taskCardDescription">{props.description}</div>

               <div className="taskCardDate"><span>{props.date}</span></div>
               
               <button onClick={changeTaskStateHandler} className={"taskCardButton "+(props.isDone ? "red" : "blue")}>
                     {props.isDone ? "To-Do" : "Done"}
               </button>
            </div>     
         </div>        
      </li>
   );
}

export default TaskItem;