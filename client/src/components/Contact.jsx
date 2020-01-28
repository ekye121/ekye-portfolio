import React from 'react';

const Contact = (props) => {
  return (
    <div className="contact">
      <h1>
        LET'S CONNECT.
      </h1>
      <p>
        ekye0121@gmail.com
      </p>
      <a href="https://linkedin.com/in/edwardkye/" target="_blank">
        LINKEDIN
      </a>
      <br/>
      <a href="https://github.com/ekye121" target="_blank">
        GITHUB
      </a>
      <br/>
      <span className="techFont link" onClick={ props.handleResumeClick }>
        RESUME
      </span>
      { props.resumeModalToggle ? (
        <div className="resume-modal">
          <label className="resume-label">
            <input
              className="resume-input"
              placeholder="Password"
              type="password"
              maxLength="20"
              value={ props.passwordValue }
              onChange={ props.handleTextChange }
            />
            <input
              className="resume-submit viewSiteButtons"
              type="submit"
              value="Submit"
              onClick={ props.onPasswordSubmit }
            />
          </label>
          <div className="resume-modal-close" onClick={ props.resumeModalClose }></div>
        </div>
      ) : (
        null
      )}
    </div>
  )
}

export default Contact;
