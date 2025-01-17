import classes from './NewPost.module.css';
import { useState } from 'react';
function NewPost(props) {
  const [enteredBody,setEnteredBody]=useState('');
  const [enteredAuthor,setEnterAuthor]=useState('');
  function changeBodyHandler(event){
    // console.log(event.target.value);
    setEnteredBody(event.target.value);
   }
    function changeAuthorHandler(event){
      // console.log(event.target.value);
      setEnteredAuthor(event.target.value);
   }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  onChange={props.onAuthorChange}/>
      </p>
    
    </form>
  );
}

export default NewPost;