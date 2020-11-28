import React from 'react'
import {SignUpContainer, SignUpTitle} from './sign-up.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''

        }
    }

    handleChange = event => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit = async event=>{
        event.preventDefault()
        const {displayName,email,password,confirmPassword} = this.state
        if (password!==confirmPassword){
            alert("Passwords does'nt Match")
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user,{displayName})

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch (error) {
            console.error(error)
        }
    }

    

    render(){

        const {displayName,email,password,confirmPassword} = this.state
        return(
        <SignUpContainer>
            <SignUpTitle>I do not have an Account</SignUpTitle>
            <span>Sign up with your E-mail and Password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required>
                </FormInput>

                <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='E-mail' required>
                </FormInput>

                <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required>
                </FormInput>

                <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required>
                </FormInput>
                
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>

        </SignUpContainer>
        )
    }
}

export default SignUp