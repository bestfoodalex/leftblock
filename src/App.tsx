import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from './images/HQ3.png';
import LandingBg from './images/landing-header.jpg';

const App = () => (
  <div className="main">
    <header>
      <StyledAppBar color="transparent" position="fixed">
        <Toolbar>
          <AppBarLogo>
            <img alt="LeftBlock Logo" src={Logo} />
            <span>LeftBlock</span>
          </AppBarLogo>
        </Toolbar>
      </StyledAppBar>
      <HeaderBackground>
        <HeaderForeground>
          <GridContainer container>
            <GridItem item xs={12} sm={12} md={6} className="primary-opaque hero-block">
              <HeroTitle variant="h2" gutterBottom>
                The progressive case for DeFi.
              </HeroTitle>
              <Typography variant="subtitle1" gutterBottom>
                We are a progressive alliance of crypto enthusiasts, technologists, political scientists, writers, and creatives 
                organized around evangelizing the necessity of digital decentralization in achieving economic equity, access, 
                ownership, and autonomy. 
              </Typography>
              <Button>Get Involved</Button>
            </GridItem>
          </GridContainer>
        </HeaderForeground>
      </HeaderBackground>
    </header>
    <MainContainer>
      <GridContainer container>
        <GridItem item xs={12} sm={12} md={12}>
          <article>
            <Typography variant="h3" gutterBottom>
              Decentralization is progressive.
            </Typography>
            <Typography variant="body1" gutterBottom>
              While many originating blockchain projects were founded with libertarian or even anarcho-capitalistic intentions, 
              the space has become increasingly more diverse as a wider political spectrum has recognized the technology's 
              potential. We believe decentralization fulfills all of the needs of a progressive agenda, and then some.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Contrary to popular belief, progressives don't want <em>big government</em>, we want <em>effective government</em>. We believe
              blockchain brings the best of both worlds: a worker-owned economy with proper governance to ensure protection, 
              proper distribution of wealth, and equal access - all leftist ideals - without the bloat, ineffiency, and
              inherent vulnerability to corruption that comes with a centralized government and fully unchecked, traditional 
              capitalistic free market. <strong>Decentralization offers us an egalitarian society without having to trust others
              to magically do the right thing: a trustless leftist utopia that still manages to create a bottom-up free market.</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
              LeftBlock was born out of a need for progressive organization within the space and on behalf of the space.
            </Typography>
            <Button>Learn More</Button>
          </article>
          <article>
            <Typography variant="h3" gutterBottom>Focus Areas</Typography>
            <ul>
              <li>Community</li>
              <li>Education</li>
              <li>Project Support and Consultation</li>
              <li>Political Lobby</li>
            </ul>
          </article>
          <article>
            <Typography variant="h3" gutterBottom>Get in Touch</Typography>
            <p>Contact Us</p>
          </article>
        </GridItem>
      </GridContainer>
    </MainContainer>
    <footer>
      <p>Footer Content</p>
    </footer>
  </div>
);

const StyledAppBar = styled(AppBar)`
  box-shadow: none !important;
`;

const AppBarLogo = styled.h1`
  img {
    display: block;
    height: 42px;
  }

  span {
    position: absolute;
    top: -1000px;
    left: -1000px;
  }
`;

const HeaderBackground = styled.div`
  background: transparent url(${LandingBg}) no-repeat center;
  background-size: fill;
`;

const HeaderForeground = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  min-height: 40vw;
  display: flex;
  align-items: center;
`;

const HeroTitle = styled(Typography)`
  &:before {
    content: "";
    display: block;
    height: 10px;
    border-top: 4px solid white;
    width: 15%;
  }
`;

const GridContainer = styled(Grid)`
    margin-right: -15px;
    margin-left: -15px;
    width: auto;
    padding: 30px;
`;

const GridItem = styled(Grid)`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex-basis: auto;

  &.primary-opaque {
    background-color: rgba(42, 170, 226, 0.65);
    color: white;
  }

  &.hero-block {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const MainContainer = styled.main`
  background: white;
  position: relative;
  z-index: 3;
  margin: -60px 30px 0px;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

export default App;
