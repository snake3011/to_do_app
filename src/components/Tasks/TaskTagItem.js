import "../../styles/TaskTagItem.scss";

function TaskTagItem(props) {

   const tagColors = {
      "high": "red",
      "medium": "yellow",
      "low": "blue",
      "work": "grey",
      "family": "green",
      "event": "purple"
   };

   return (
      <div className="col tag">
         <span className={"tag "+tagColors[props.tag]}>
            {props.tag}
         </span>
      </div>
   );
}

export default TaskTagItem;