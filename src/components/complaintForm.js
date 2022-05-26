import React, {Component} from 'react';
import Input from './input';
import Select from './select';
import Textarea from './textarea';
import Button from './button';
import Feedback from './feedback';

class ComplaintForm extends Component{

    constructor(props){
        super(props);

        this.state={
            fullName:'',
            email: '',
            reason:'',
            reasonOptions: [
                "My account was debited without authorization",
                "My card was stolen",
                "My card is expired",
                "Others"
            ],
            feedbackDetails: null,
            showFeedbackdetails: false,
        } }

    // handleFullNameChange = (event) =>{
    //     this.setState({fullName: event.target.value})
    // }

    // handleEmailChange = (event) =>{
    //     this.setState({email: event.target.value})
    // }

    // handleReasonChange = (event) =>{
    //     this.setState({reason: event.target.value})
    // }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleComplaintSubmission = (event) => {
        event.preventDefault();

        const {fullName, email, reason, description} = this.state;

        const feedbackDetails = {
            fullName: fullName,
            email: email,
            reason: reason,
            description: description,
        }

        this.setState({feedbackDetails: feedbackDetails, showFeedbackdetails: true})  
        console.log({feedbackDetails})
    }

    handleFormReset = (event) => {
        event.preventDefault();

        this.setState({
            fullName: '',
            email:'',
            reason: '',
            description: '',
            showFeedbackdetails: false
        })
    }

    render(){
        return(
            <div className='row mt-4'>
                <form className='col-md-6'>
                    <Input name='fullName'
                            title='Full Name'
                            inputType='text'
                            placeholder='Enter your full name'
                            handleChange={this.handleInputChange}
                            value={this.state.fullName}/>

                             <Input name='email'
                            title='Email'
                            inputType='email'
                            placeholder='someone@email.com'
                            handleChange={this.handleInputChange}
                            value={this.state.email}/>

                    <Select
                    title='Reason of Contact'
                    name='reason'
                    value={this.state.reason}
                    options={this.state.reasonOptions}
                    handleChange={this.handleInputChange}
                    placeholder='Select a reason'
                    />

                    <Textarea
                    title='Description'
                    name='description'
                    rows={5}
                    cols={10}
                    value={this.state.description}
                    handleChange={this.handleInputChange}
                    placeholder='Enter a description here...'
                    />

                    <Button title='Submit' backgroundColor='#16a085' onButtonClick={this.handleComplaintSubmission}/>
                    <Button title='Reset'  backgroundColor='#9b59b6' onButtonClick={this.handleFormReset}/>

                </form>

                {this.state.showFeedbackdetails && (
                <div className='col-md-6'>
                <Feedback feedbackDetails={this.state.feedbackDetails}/>  </div>
                )}

            </div>
        )
    }
}

export default ComplaintForm;