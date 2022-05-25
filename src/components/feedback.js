import React from "react";
 const Feedback = (props) =>{

    // const feedbackDetails {
    //     name:"",
    //     email:"",
    //     reason:"",
    //     description:"",
    // }
     return(
     <div className="ml-4">
         <h2 className="mb-4">Customer Complaint Details</h2>

         <h5>Name of Customer</h5>
         <p>{props.feedbackDetails.name}</p>

         <h5>Email</h5>
         <p>{props.feedbackDetails.email}</p>e3
         <h5>Reason</h5>
         <p>{props.feedbackDetails.reason}</p>

         <h5>Description</h5>
         <p>{props.feedbackDetails.description}</p>
     </div>
) }

export default Feedback;