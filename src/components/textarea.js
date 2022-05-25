import React from "react";

const Textarea = (props) =>{
    return(
        <div className="form-group">
            <label className="form-label">{props.title}</label>
            <textarea 
            className="form-control"
            name={props.name}
            row={props.row}
            cols={props.cols}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}/>
        </div>
        
    )
}


export default Textarea;