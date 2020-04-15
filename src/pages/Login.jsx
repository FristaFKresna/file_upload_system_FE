import React from 'react'

class Login extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 my-5 card p-4">
                        <h3 className='mb-3'>Log In</h3>
                    
                        <div className='email-username-password'>Email :</div>
                        <input type='text' placeholder='Enter Email' ref='email' className='form-control mb-3' ></input>

                        <div className='email-username-password'>Password :</div>
                        <input type='password' placeholder='Enter Password' ref='password' className='form-control mb-3' ></input>

                        <div className="btn btn-primary mb-3">Log In</div>
                        
                        <div className="btn btn-danger text-center mb-3">Login With Google Mail</div>
                        
                        <div className='text-center'>Forget Password ?</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login