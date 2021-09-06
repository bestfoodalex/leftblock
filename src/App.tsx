import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './images/HQ3.png';
import LandingBg from './images/landing-header.jpg';

const App = () => (
  <div className="main">
    <header>
      <StyledAppBar color="transparent" position="fixed">
        <Toolbar>
          <h1>
            <img alt="LeftBlock Logo" height="42px" src={Logo} />
            <span>LeftBlock</span>
          </h1>
        </Toolbar>
      </StyledAppBar>
      <HeaderBackground>
        <h2>The progressive case for DeFi.</h2>
        <p>
          We are a progressive alliance of crypto enthusiasts, technologists, political scientists, writers, and creatives 
          organized around evangelizing the necessity of digital decentralization in achieving economic equity, access, 
          ownership, and autonomy. 
        </p>
        <Button>Get Involved</Button>
      </HeaderBackground>
    </header>
    <main>
      <article>
        <h2>Decentralization is progressive.</h2>
        <p>
          While many originating blockchain projects were founded with libertarian or even anarcho-capitalistic intentions, 
          the space has become increasingly more diverse as a wider political spectrum has recognized the technology's 
          potential. We believe decentralization fulfills all of the needs of a progressive agenda, and then some.
        </p>
        <p>
          Contrary to popular belief, progressives don't want <em>big government</em>, we want <em>effective government</em>. We believe
          blockchain brings the best of both worlds: a worker-owned economy with proper governance to ensure protection, 
          proper distribution of wealth, and equal access - all leftist ideals - without the bloat, ineffiency, and
          inherent vulnerability to corruption that comes with a centralized government and fully unchecked, traditional 
          capitalistic free market. <strong>Decentralization offers us an egalitarian society without having to trust others
          to magically do the right thing: a trustless leftist utopia that still manages to satisfy libertarian dreams.</strong>
        </p>
        <p>
          LeftBlock was born out of a need for progressive organization within the space and on behalf of the space.
        </p>
        <Button>Learn More</Button>
      </article>
      <article>
        <h2>Focus Areas</h2>
        <ul>
          <li>Community</li>
          <li>Education</li>
          <li>Project Support and Consultation</li>
          <li>Political Lobby</li>
        </ul>
      </article>
      <article>
        <h2>Get in Touch</h2>
        <p>Contact Us</p>
      </article>
    </main>
    <footer>
      <p>Footer Content</p>
    </footer>
  </div>
);

const StyledAppBar = styled(AppBar)`
  box-shadow: none !important;
`;

const HeaderBackground = styled.div`
  background: transparent url(${LandingBg}) no-repeat center;
  background-size: fill;
  min-height: 40vw;
`;

export default App;
