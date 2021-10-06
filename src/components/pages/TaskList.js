import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "@firebase/firestore";

import TaskListDone from "../Tasks/TaskListDone";
import TaskListToDo from "../Tasks/TaskListToDo";
import db from "../../db/firebaseConfig";
import "../../styles/TaskList.scss";

function TaskList() {

   const [loadedTasks, setLoadedTasks] = useState([]);

   useEffect(() => {

      const tasks = [];

      // takes task data from DB and creates an array with it, realoading the state afterwards
      const getData = async() => { 
         const data = await getDocs(collection(db, "tasks"));

         data.forEach(document => {         

            const taskData = document.data();

            const task = {
               id: taskData.id,
               title: taskData.title,
               tags: taskData.tags,
               date: taskData.date,
               isDone: taskData.isDone,
               description: taskData.description,
            };

            tasks.push(task);
      
         });

         setLoadedTasks(tasks);
                
      }   
      getData();        

   }, []);

   // update the task in the DB, updating the state and reloading the state with the new tasks set
   function changeTaskState(task) {
      const updateData = async() => {
         // task update
         const taskRef = doc(db, "tasks", task.id);
            await updateDoc(taskRef, {
               isDone: !task.isDone
         });
         
         // task query (including the updated task)
         const getData = async() => {
            const data = await getDocs(collection(db, "tasks"));
            const tasks =[];
            data.forEach(document => {         
   
               const taskData = document.data();
   
               const task = {
                  id: taskData.id,
                  title: taskData.title,
                  tags: taskData.tags,
                  date: taskData.date,
                  isDone: taskData.isDone,
                  description: taskData.description,
               };
   
               tasks.push(task);
         
            });

            setLoadedTasks(tasks);
         }   
         getData();               
      }
      updateData();
   }

   return (
      <section>
         <div className="container">
            <div className="row">
               <div className="col TODO">
                  <h2 className="textBig mb30">TO-DO</h2>
                  <TaskListToDo 
                     tasks={loadedTasks}
                     changeTaskState={changeTaskState}
                  ></TaskListToDo>
               </div>
               <div className="col">
                  <h2 className="textBig mb30">DONE</h2>
                  <TaskListDone 
                     tasks={loadedTasks}
                     changeTaskState={changeTaskState}
                  ></TaskListDone>
               </div>
            </div>
         </div>
      </section>
   );
}

export default TaskList;