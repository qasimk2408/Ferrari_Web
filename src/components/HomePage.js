import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import './HomePage.css';
import { ReactComponent as MyLogo } from './Lambo.svg';
import { ReactComponent as Ferrari} from './Ferrari.svg';
import { ReactComponent as Mclaren} from './Mclaren.svg';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<HomeIcon>home</HomeIcon>}
            sx={{ backgroundColor: '#007bff', '&:hover': { backgroundColor: '#0056b3' } }}
          >
            Home
          </Button>
          
          <Typography variant="h4" component="h1" sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            Vintage Car.Co
          </Typography>

          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<HelpIcon>help</HelpIcon>}
            onClick={() => navigate('/support')}
            sx={{ backgroundColor: '#007bff', '&:hover': { backgroundColor: '#0056b3' } }}
          >
            Help
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <div className="App">
          <div className="page-content">
            <div className="text-section">
              <h3>Welcome to Vintage Car.Co</h3>
              <p>
                Discover the world's most prestigious supercars. Our collection features iconic models 
                from legendary manufacturers like Lamborghini, Ferrari, and McLaren. Each vehicle 
                represents the pinnacle of automotive engineering and design.
              </p>
              <p>
                Click on any car to explore its rich history, technical specifications, and what makes 
                it truly special in the world of luxury automobiles.
              </p>
            </div>

            <div className="Cars">
              <div className="car-header" onClick={() => navigate('/lamborghini')}>
                <h2>Lamborghini</h2>
                <MyLogo />
              </div>
              <div className="car-header" onClick={() => navigate('/ferrari')}>
                <h2>Ferrari</h2>
                <Ferrari />
              </div>
              <div className="car-header" onClick={() => navigate('/mclaren')}>
                <h2>McLaren</h2>
                <Mclaren />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;