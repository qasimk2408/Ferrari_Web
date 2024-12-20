// src/pages/LamborghiniPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Typography, 
  Container, 
  Box, 
  Button, 
  IconButton, 
  Paper 
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LamborghiniImages = [
  '/lambo1.jpg',
  '/lambo2.jpg',
  '/lambo3.jpg',
  '/lambo4.jpg',
  '/lambo5.jpg'
];

const LamborghiniPage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % LamborghiniImages.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + LamborghiniImages.length) % LamborghiniImages.length
    );
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, my: 4 }}>
        <Button 
          onClick={() => navigate('/')} 
          variant="contained" 
          color="secondary" 
          sx={{ mb: 4 }}
        >
          Back to Home
        </Button>
        
        <Typography variant="h2" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
          Lamborghini
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 2, 
          mb: 4 
        }}>
          <IconButton 
            onClick={handlePrevImage} 
            color="primary" 
            sx={{ 
              bgcolor: 'primary.light', 
              '&:hover': { bgcolor: 'primary.main' } 
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          
          <Box sx={{ 
            width: '70%', 
            height: '500px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            border: '2px solid',
            borderColor: 'primary.light',
            borderRadius: 2,
            boxShadow: 3
          }}>
            <img 
              src={LamborghiniImages[currentImageIndex]} 
              alt={`Lamborghini ${currentImageIndex + 1}`} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain',
                transition: 'transform 0.3s ease-in-out'
              }} 
            />
          </Box>
          
          <IconButton 
            onClick={handleNextImage} 
            color="primary" 
            sx={{ 
              bgcolor: 'primary.light', 
              '&:hover': { bgcolor: 'primary.main' } 
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
            About Lamborghini
          </Typography>
          <Typography paragraph>
            Automobili Lamborghini S.p.A. is an Italian luxury sports car manufacturer 
            founded in 1963 by Ferruccio Lamborghini. Initially, Lamborghini was a tractor 
            manufacturer, but after a dispute with Enzo Ferrari, Ferruccio decided to create 
            his own sports car.
          </Typography>
          <Typography paragraph>
            The company quickly gained a reputation for creating some of the most exotic 
            and powerful sports cars in the world. Models like the Miura, Countach, and 
            Diablo have become legendary in automotive history.
          </Typography>
          <Typography paragraph>
            Today, Lamborghini continues to be a symbol of performance, luxury, and 
            cutting-edge automotive design, producing some of the most sought-after 
            supercars globally.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LamborghiniPage;