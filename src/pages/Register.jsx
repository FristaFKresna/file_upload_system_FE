import React from 'react'


class Register extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 my-5 card p-5">
                            <h3>REGISTER</h3>
                            <div className='mb-4'>Please fill in this form to create an account.</div>

                            <div className='email-username-password'>Email :</div>
                            <input type='text' placeholder='Enter Email' ref='email' className='form-control mb-3' ></input>

                            <div className='email-username-password'>Password :</div>
                            <input type='password' placeholder='Enter Password' ref='password' className='form-control mb-3' ></input>

                            <div className='email-username-password'>Confirm Password :</div>
                            <input type='password' placeholder='Confirm Password' ref='confirm' className='form-control mb-3' ></input>
                                                    
                            <div className='text-center mb-3'>By creating an account you agree to our Terms & Privacy.</div>

                            <div className="btn btn-primary mb-3">Register</div>
                            
                            <div className="btn btn-danger text-center mb-3">Register With Google Mail</div>
                            
                            <div className='text-center'>Already have an account? Sign in</div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Register