import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import FadeIn from 'react-fade-in';
import AppBar from './AppBar';
import Banner from './Banner';
import Installation from './Installation';
import Demo from './Demo';
import Libraries from './Libraries';
import Templates from './Templates';
import WriteUps from './WriteUps';
import Footer from './Footer';

function App() {
  return (
    <Container maxWidth="md">
      <FadeIn>
        <AppBar />
        <Banner />
        <Libraries />
        <Divider />
        <div id="installation" />
        <Installation />
        <Divider />
        <Demo />
        <Divider />
        <Templates />
        <Divider />
        <WriteUps />
        <Divider />
        <Footer />
      </FadeIn>
    </Container>
  );
}

export default App;
