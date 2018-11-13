import React from 'react';
import { SectionsContainer, Section, Header } from 'react-fullpage';

import NavBar from './NavBar.jsx';
import About from './About.jsx';
import Apps from './Apps.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  render() {
    let options = {
      // sectionClassName: 'section',
      anchors: [ 'about', 'apps', 'contact' ],
      navigation: true,
      verticalAlign: true,
      arrowNavigation: true,
      scrollBar: true,
      sectionPaddingTop: '50px',
      sectionPaddingBottom: '50px',
      // delay: 2000,
    };
    
    return (
      
      <div>
        <Header>
          <NavBar />
        </Header>
        <SectionsContainer { ...options }>
          <Section color="black" >
            <About />
          </Section>
          <Section color="white">
            <Apps />
          </Section>
          <Section color="black">
            <Contact />
          </Section>
        </SectionsContainer>

        {/* <NavBar />
        <About /> */}
      </div>
    )
  }
}

export default App;