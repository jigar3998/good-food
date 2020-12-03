import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'

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
        const {emailSignInStart} = this.props
        const {email,password} = this.state
        
        emailSignInStart(email, password)
    }

    handleChange = event => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    render(){
        const {googleSignInStart} = this.props
        return(
            
            <SignInContainer>
                <SignInTitle>I already have an Account</SignInTitle>
                <span>Sign in with your E-mail and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} label='email' handleChange={this.handleChange} required></FormInput>
                    
                    <FormInput name='password' type='password' value={this.state.password} label='password' handleChange={this.handleChange} required></FormInput>
                    
                    <ButtonsBarContainer>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton type='button' onClick = {googleSignInStart} isGoogleSignIn> {' '}Sign in with Google{' '}</CustomButton>
                        
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }

}

const mapDispatchToProps = dispatch =>  ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)