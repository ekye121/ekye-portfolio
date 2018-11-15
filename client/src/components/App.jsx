import React from 'react';
import { SectionsContainer, Section, Header } from 'react-fullpage';

import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Work from './Work.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  render() {
    let options = {
      // sectionClassName: 'section',
      anchors: [ 'home', 'about', 'work', 'contact' ],
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
          <Section color="white">
            <Work />
          </Section>
          <Section color="black">
            <Contact />
          </Section>
        </SectionsContainer>
      </div>
    )
  }
}

export default App;
