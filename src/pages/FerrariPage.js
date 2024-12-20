// src/pages/FerrariPage.js
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

const FerrariImages = [
  '/ferrari1.jpg',
  '/ferrari2.jpg',
  '/ferrari3.jpg',
  '/ferrari4.jpg',
  '/ferrari5.jpg'
];

const FerrariPage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % FerrariImages.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + FerrariImages.length) % FerrariImages.length
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
          Ferrari
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
              src={FerrariImages[currentImageIndex]} 
              alt={`Ferrari ${currentImageIndex + 1}`} 
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
            About Ferrari
          </Typography>
          <Typography paragraph>
            Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. 
            Founded by Enzo Ferrari in 1939 out of Alfa Romeo's race division as Auto Avio 
            Costruzioni, the company built its first car in 1940.
          </Typography>
          <Typography paragraph>
            The company's story officially began in 1947 when the first Ferrari-badged car was 
            completed. Throughout its history, the company has been noted for its continued 
            participation in racing, especially in Formula One.
          </Typography>
          <Typography paragraph>
            Ferrari road cars are generally seen as a symbol of luxury and wealth. Ferrari has 
            maintained a reputation for producing some of the most sought-after and expensive cars 
            in the world.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default FerrariPage;