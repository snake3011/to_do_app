import React, { useState } from 'react'
import makeAnimated from 'react-select/animated';
import Select from 'react-select'

import "../../styles/CreateTaskForm.scss";

function CreateTaskForm(props) {

   const [tagError, setTagError] = useState(false);
   let selectedTags = [];
   // options for the react-select
   const customTagsSelectOptions = [
      {value: "high", label: "High", color: "#dc3545"},
      {value: "medium", label: "Medium", color: "#ffc107"},
      {value: "low", label: "Low", color: "#0dcaf0"},
      {value: "work", label: "Work", color: "#6c757d"},
      {value: "family", label: "Family", color: "#198754"},
      {value: "event", label: "Event", color: "#8360ac"},
   ]
   // custom styles for the react-select
   const customColorStyles = {
      option: (styles, {data}) => {
         return {
            ...styles,
            padding: 5,
            borderBottom: '1px dotted green',   
            backgroundColor: data.color,
            color: "#292727",
         }
      }
   }

   // saves into the selectedTags var the select options each time the select changes
   function selectChangeHandler(selectedOptions) {
      selectedTags = selectedOptions;
   }

   // handles the form submit
   function submitHandler(event) {
      event.preventDefault();
      // control the react-select input errors using state
      if (!selectedTags || selectedTags.length === 0){
         setTagError(true);
         return;
      } 
      else setTagError(false);

      // form input info
      const enteredTitle = event.target.elements.taskTitle.value;
      const enteredDescription = event.target.elements.taskDescription.value;
      const enteredTags = [];

      for (const key in selectedTags) { // transform the select data into an array
         const tag = selectedTags[key].value;
         enteredTags.push(tag);
      }

      // create task with the data gathered
      const taskData = {
         title: enteredTitle,
         tags: enteredTags,
         description: enteredDescription,
         isDone: false
      }

      // add task into the DB
      props.onAddTask(taskData);
   }

   return (
      <form onSubmit={submitHandler}>
         {/* TITLE */}
         <div className="form-group mb30">        
            <label className="labelTitle" htmlFor="taskTitle">TITLE</label>
            <input type="text" name="taskTitle" className="form-control" id="taskTitle" 
               placeholder="Enter title" required />
         </div>

         {/* SELECT */}
         <div className="form-group mb30">
            <label className="labelTitle form-label select-label" htmlFor="taskTags">TAGS</label>
            <Select 
               className="tagsSelect"
               classNamePrefix="task"
               components={makeAnimated()}
               options={customTagsSelectOptions} 
               isMulti
               placeholder="Select a task..."
               id="taskTags"
               name="taskTags"           
               styles={customColorStyles}
               onChange={selectChangeHandler}
            />
            <div className={"tagsError " + (tagError ? "" : "d-none")}>Enter some tag</div>
         </div>

         {/* DESCRIPTION */}
         <div className="form-group">
            <label className="labelTitle" htmlFor="taskDescription">Description</label>
            <textarea className="form-control" name="taskDescription" id="taskDescription" 
               rows={3} required placeholder="Enter description" ></textarea>
         </div>

         {/* SUBMIT */}
         <div>
            <button type="submit" className="submit btn btn-primary">CREATE</button>
         </div>        
      </form>
   );
}

export default CreateTaskForm;