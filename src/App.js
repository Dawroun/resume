import { Container, Grid } from '@material-ui/core';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={3} >
              <Profile />
            </Grid>
            <Grid item xs>
              <Header />
              <Router>
                <Portfolio />
                <Resume />
              </Router>
              <Footer />
            </Grid>
          </Grid>
        </Container>
    </div>
  );
}

export default App;
