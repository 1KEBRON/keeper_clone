import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note,setnote] = useState({
    title:'',
    content:''
  });
  const [isExpand,setExpand] = useState(false)

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
      <form  className="create-note">
       {isExpand && 
       (<input name="title" placeholder="Title" onChange={handleChange} value={note.title} />)}
        <textarea name="content" placeholder="Take a note..."  onClick={()=>{setExpand(true)}}  onChange={handleChange} value={note.content}  rows={isExpand ? 3 : 1} />
        <Zoom in={isExpand}>
        <Fab onClick={(event)=>{
          event.preventDefault()
          props.onAdd(note)
          setnote({
             title:'',
             content:''
          })
          }} >
          <AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
