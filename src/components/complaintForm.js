import React, {Component} from 'react';
import Input from './input';
import Select from './select'

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
            ]
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

    render(){
        return(
            <div className='row mt-4'>
                <form>
                    <Input name='fullName'
                            title='Full Name'
                            inputType='text'
                            placeholder='Enter your full name'
                            handleChange={'this.handleFullNameChange'}
                            value={this.state.fullName}/>

                             <Input name='email'
                            title='Email'
                            inputType='email'
                            placeholder='someone@email.com'
                            handleChange={'this.handleEmailChange'}
                            value={this.state.email}/>

                    <Select
                    title='Reason of Contact'
                    name='reason'
                    value={this.state.reason}
                    options={this.state.reasonOptions}
                    handleChange={this.handleReasonChange}
                    />

                </form>
            </div>
        )
    }
}

export default ComplaintForm;