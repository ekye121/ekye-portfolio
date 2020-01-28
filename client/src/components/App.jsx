import React from 'react';
import { SectionsContainer, Section, Header } from 'react-fullpage';

import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Work from './Work.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordValue: '',
      resumeModalToggle: false,
      isPWCorrect: false,
    }
  }

  handleTextChange(e) {
    this.setState({
      passwordValue: e.target.value
    });
  };

  handleResumeClick() {
    this.setState({
      resumeModalToggle: true
    });

    // document.body.addEventListener('click', () => {
    //   this.setState({
    //     resumeModalToggle: false
    //   });
    // });

    window.addEventListener('scroll', () => {
      let contactSection = document.querySelector('#contact').getBoundingClientRect();
      if (contactSection.y > contactSection.height) {
        this.setState({
          resumeModalToggle: false
        });
      }
    });
  };

  resumeModalClose() {
    this.setState({
      resumeModalToggle: false
    })
  }

  onPasswordSubmit() {
    let resumeModal = document.querySelector('.resume-modal');
    if (this.state.passwordValue === 'hackable') {
      window.open('resume.pdf', 'Resume');
    } else {
      resumeModal.style.animation = 'shake .20s linear';
      // setTimeout(() => {
      //   resumeModal.style.animation = 'none';
      // }, 250);
    }
  }

  render() {
    let options = {
      // sectionClassName: 'section',
      anchors: [ 'home', 'about', 'experience', 'work', 'contact' ],
      navigation: true,
      verticalAlign: true,
      arrowNavigation: true,
      scrollBar: true,
      sectionPaddingTop: '30px',
      sectionPaddingBottom: '30px'
    };

    return (
      <div>
        <Header>
          <NavBar />
        </Header>
        <SectionsContainer { ...options }>
          <Section color="black">
            <Home />
          </Section>
          <Section color="black">
            <About />
          </Section>
          <Section color="black">
            <Experience />
          </Section>
          <Section color="white">
            <Work />
          </Section>
          <Section color="black">
            <Contact
              passwordValue={ this.state.passwordValue }
              isPWCorrect={ this.state.isPWCorrect }
              resumeModalToggle={ this.state.resumeModalToggle }
              handleResumeClick={ () => this.handleResumeClick() }
              handleTextChange={ (e) => this.handleTextChange(e) }
              onPasswordSubmit={ () => this.onPasswordSubmit() }
              resumeModalClose={ () => this.resumeModalClose() }
            />
          </Section>
        </SectionsContainer>
      </div>
    )
  }
}

export default App;
