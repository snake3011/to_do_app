import TaskTagItem from "./TaskTagItem";
import "../../styles/TaskTagList.scss";

function TaskTagList(props) {

   const tags = props.tags;

   if (tags && tags.length <= 3) { // 3 or less tags = 1 row

      return (
         <div className="taskTagListContainer">
               <div className="row tag">
               {props.tags.map((tag) => {          
                  return (
                     <TaskTagItem 
                        key={tag}
                        tag={tag}>
                     </TaskTagItem>
                  );
               })}
               <hr />
            </div>
         </div>     
      );

   }else if (tags) { // 4 or more tags = 2 rows
      // splitting the tags array into two arrays
      const tags_slice1 = tags.slice(0,3);
      const tags_slice2 = tags.slice(3)

      return (
         <div className="taskTagListContainer">
            <div className="row tag">
               {tags_slice1.map((tag) => { 
                  return (
                     <TaskTagItem 
                        key={tag}
                        tag={tag}>
                     </TaskTagItem>
                  );               
               })}
            </div>

            <div className="row tag">
               {tags_slice2.map((tag) => { 
                  return (
                     <TaskTagItem 
                        key={tag}
                        tag={tag}>
                     </TaskTagItem>
                  );                     
               })}
               <hr />
            </div>         
         </div>
         
      );
   } else{ // no tags = empty
      return (
         <div></div>
      );
   }

}

export default TaskTagList;