import React, {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    
    const [userCredentials, setCredentials] = useState({email:'', password:''})
    const {email,password} = userCredentials
    const handleSubmit= async event=>{
        event.preventDefault()
        
        
        emailSignInStart(email, password)
    }

    const handleChange = event => {
        const {name,value} = event.target
        setCredentials({...userCredentials,[name]:value})
    }

    
    return(
        
        <SignInContainer>
            <SignInTitle>I already have an Account</SignInTitle>
            <span>Sign in with your E-mail and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} label='email' handleChange={handleChange} required></FormInput>
                
                <FormInput name='password' type='password' value={password} label='password' handleChange={handleChange} required></FormInput>
                
                <ButtonsBarContainer>
                    <CustomButton type='submit' >Sign In</CustomButton>
                    <CustomButton type='button' onClick = {googleSignInStart} isGoogleSignIn> {' '}Sign in with Google{' '}</CustomButton>
                    
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
}



const mapDispatchToProps = dispatch =>  ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)