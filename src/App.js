import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Forms Constructor
          </Typography>
        </Toolbar>
      </AppBar>
      <Main/>
    </Container>
  );
}

export default App;
