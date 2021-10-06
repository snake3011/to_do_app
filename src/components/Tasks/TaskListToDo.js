import "../../styles/TaskListToDo.scss";
import TaskItem from "./TaskItem";

function TaskListToDo(props) {

   return (
      <ul>
        {props.tasks.map((task) => {
            if (!task.isDone) {
               return (
                  <TaskItem
                     key={task.id}
                     task={task}
                     title={task.title}
                     description={task.description}
                     tags={task.tags}
                     date={task.date}
                     isDone={task.isDone}
                     changeTaskState={props.changeTaskState}
                     deleteTask={props.deleteTask}
                  ></TaskItem>
               );
            }
            return "";
        })} 
      </ul>
   );
}

export default TaskListToDo;