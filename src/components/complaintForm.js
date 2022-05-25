import React, {Component} from 'react';
import Input from './input';

class ComplaintForm extends Component{

    constructor(props){
        super(props);

        this.state={
            fullName:'',
        } }

        handleFullNameChange = (events) => {
            this.setState({fullName: events.target.value})
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
                </form>
            </div>
        )
    }
}

export default ComplaintForm;