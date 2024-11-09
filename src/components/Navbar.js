import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from "react-icons/fa6";
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/"><strong>{props.title}</strong></Link> */}
    <a className="navbar-brand" href="#"><strong>{props.title}</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        
        <li className="nav-item btn btn-dark text-white ms-2">

        <a href="https://github.com/namankoolwal/TextUtil/" className="d-flex text-decoration-none text-white align-items-center">
        <FaGithub className='fs-5 me-2' />
              Give a Star
            </a>
        </li>
      </ul>
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" style={{height:'30px', width:"30px", cursor:"pointer"}} onClick={()=>{props.toggleMode('primary')}}></div>
        <div className="bg-danger rounded mx-2" style={{height:'30px', width:"30px", cursor:"pointer"}} onClick={()=>{props.toggleMode('danger')}}></div>
        <div className="bg-warning rounded mx-2" style={{height:'30px', width:"30px", cursor:"pointer"}} onClick={()=>{props.toggleMode('warning')}}></div>
        <div className="bg-success rounded mx-2" style={{height:'30px', width:"30px", cursor:"pointer"}} onClick={()=>{props.toggleMode('success')}}></div>
      </div>
        <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={()=>{props.toggleMode(null)}} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.btnText} Mode</label>
        </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired}

Navbar.defaultProps = {title: "Set title here",
                       aboutText: "Set About"}
