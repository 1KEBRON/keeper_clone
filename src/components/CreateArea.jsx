import React, { useState } from "react";

function CreateArea(props) {
  const [note,setnote] = useState({
    title:'',
    content:''
  });
  // const [content,setContent] = useState('');

  function handleChange(event){
    const {name,value} = event.target
      setnote((prevValue)=>{
        return {
          ...prevValue,
          [name]:value
        }
      })

  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..."  onChange={handleChange} value={note.content}  rows="3" />
        <button onClick={(event)=>{
          event.preventDefault()
          props.onAdd(note)
          setnote({
             title:'',
             content:''
          })
          }} 
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
