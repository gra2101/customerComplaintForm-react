import React from "react";

 const Buttons = (props) =>{
     <div>
         <button 
         style={{backgroundColor: props.backgroundColor, margin: "10px"}}
         className="btn btn-lg,">
             {props.title}
         </button>
     </div>
 }

 export default Buttons;