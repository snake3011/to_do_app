import { useHistory } from "react-router-dom";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';

import CreateTaskForm from "../Tasks/CreateTaskForm";
import db from "../../db/firebaseConfig";
import "../../styles/CreateTask.scss";

function CreateTask() {

   const history = useHistory();

   // add a given task to the DB
   function addTaskHandler(taskData) {

      try {
         const insertData = async() => {
            // add task
            const docRef = await addDoc(collection(db, "tasks"), {            
               id: 0,
               title: taskData.title,
               tags: taskData.tags,
               description: taskData.description,
               isDone: false,
               date: getFullActualDateString()
            });
            // update task id using docRef id
            const taskRef = doc(db, "tasks", docRef.id);
            await updateDoc(taskRef, {
               id: docRef.id
            });
         };

         insertData().then(() => {
            toast.success('Task created!');
            // back to main page
            history.replace("/");
         });      
         
      } catch (e) {
         console.error(e);
      }

   }

   // returns formated actual date 
   function getFullActualDateString() {
      const actualDate = new Date();
      const day = actualDate.getDate();
      const month = (actualDate.getMonth()+1);
      const year = actualDate.getFullYear();
      const hour = actualDate.getHours();
      const minute = actualDate.getMinutes();
      const second = actualDate.getSeconds();
      let returnDate = "";

      if (month < 10) returnDate += "0"+month;
      else returnDate += month;
      returnDate += "/";

      if (day < 10) returnDate += "0"+day;
      else returnDate += day;
      returnDate += "/";

      returnDate += year+" "

      if (hour < 10) returnDate += "0"+hour;
      else returnDate += hour;
      returnDate += ":";

      if (minute < 10) returnDate += "0"+minute;
      else returnDate += minute;
      returnDate += ":";

      if (second < 10) returnDate += "0"+second;
      else returnDate += second;
      
      return returnDate;
   }

   return (
      <section>
         <div><Toaster
            position="top-right"
         /></div>
         <h2 className="textBig">CREATE TASK <br /> <hr /></h2>
         
         <CreateTaskForm onAddTask={addTaskHandler}></CreateTaskForm>
      </section>
   );
}

export default CreateTask;