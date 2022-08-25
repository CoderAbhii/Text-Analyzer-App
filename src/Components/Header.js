import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{"backgroundColor": "#90EE90	"}}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fw-bold" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="navbar-brand fs-3 fw-bold" to="/covertLangText" style={{ marginLeft: "70px" }}>{props.convertLangText}</Link>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="navbar-brand fs-3 fw-bold" to="/learnmore" style={{ marginLeft: "70px" }}>{props.about}</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: "Welcome To My App"
}