import React from 'react';
import './post-add-form.css'

const PostAddForm = () => {
    return (
        <form className ="bottom-panel d-flex">
            <input 
                  type = "text"
                  className = "form-control new-post-label"
                  placeholder = "О чем вы думаете">
            </input>
            <button className ="btn btn-outline-secondsary"
                    type="submit">
             Добавить</button>
        </form>

    )
}

export default PostAddForm;