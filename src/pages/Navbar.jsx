import React from 'react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component{
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand">Upload File System</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/post'>
                                <div className="nav-item nav-link" >Post Product</div>
                            </Link>
                            <Link to='/list'>
                                <div className="nav-item nav-link" >List Product</div>
                            </Link>
                            <Link to='/register'>
                                <div className="nav-item nav-link" >Register</div>
                            </Link>
                            <Link to='/login'>
                                <div className="nav-item nav-link" >Login</div>
                            </Link>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar