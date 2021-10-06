import "../../styles/TaskListDone.scss";
import TaskItem from "./TaskItem";

function TaskListDone(props) {

   return (
      <ul>
        {props.tasks.map((task) => {
            if (task.isDone) {
               return (
                  <TaskItem
                     task={task}
                     key={task.id}
                     title={task.title}
                     description={task.description}
                     tags={task.tags}
                     date={task.date}
                     isDone={task.isDone}
                     changeTaskState={props.changeTaskState}
                  ></TaskItem>
               );
            }
            return "";
        })} 
      </ul>
   );
}

export default TaskListDone;