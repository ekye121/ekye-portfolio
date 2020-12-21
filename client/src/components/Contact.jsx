import React from 'react';

const Contact = (props) => {
  return (
    <div className="contact">
      <h1>
        LET'S CONNECT
      </h1>
      <span>
        ekye0121@gmail.com
      </span>
      <div className="contact-links">
        <a href="https://linkedin.com/in/edwardkye/" target="_blank">
          LINKEDIN
        </a>
        <a href="https://github.com/ekye121" target="_blank">
          GITHUB
        </a>
        <a className="link" onClick={ props.handleResumeClick }>
          RESUME
        </a>
      </div>
      { props.resumeModalToggle ? (
        <div className="resume-modal">
          <form className="resume-form" onSubmit={ props.onPasswordSubmit }>
            <input
              name="pw-input"
              data-lpignore="true"
              autoFocus
              className="resume-input"
              placeholder=" Password"
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
          </form>
          <div className="resume-modal-close" onClick={ props.resumeModalClose }></div>
        </div>
      ) : (
        null
      )}
    </div>
  )
}

export default Contact;
