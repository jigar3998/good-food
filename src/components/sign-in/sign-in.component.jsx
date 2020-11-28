import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault()
        const {email,password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email,password)
            
            this.setState({email:'', password:''})
            

        } catch (error) {
            console.log(error);
        }
        

    }

    handleChange = event => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    render(){
        return(
            
            <SignInContainer>
                <SignInTitle>I already have an Account</SignInTitle>
                <span>Sign in with your E-mail and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} label='email' handleChange={this.handleChange} required></FormInput>
                    
                    <FormInput name='password' type='password' value={this.state.password} label='password' handleChange={this.handleChange} required></FormInput>
                    
                    <ButtonsBarContainer>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> {' '}Sign in with Google{' '}</CustomButton>
                        
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }

}

export default SignIn