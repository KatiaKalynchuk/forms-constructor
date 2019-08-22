import React from 'react'
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <Container maxWidth="md">
      <AppBar position="static" style={{ backgroundColor: '#1e374c' }}>
        <Toolbar>
          <Typography variant="h6">
            Forms Constructor
          </Typography>
        </Toolbar>
      </AppBar>

      <Routes/>
    </Container>
  );
}

export default App;
