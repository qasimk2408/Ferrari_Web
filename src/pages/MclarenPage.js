// src/pages/MclarenPage.js
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

const MclarenImages = [
  '/mclaren1.jpg',
  '/mclaren2.jpg',
  '/mclaren3.jpg',
  '/mclaren4.jpg',
  '/mclaren5.jpg'
];

const MclarenPage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % MclarenImages.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + MclarenImages.length) % MclarenImages.length
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
          McLaren
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
              src={MclarenImages[currentImageIndex]} 
              alt={`McLaren ${currentImageIndex + 1}`} 
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
            About McLaren
          </Typography>
          <Typography paragraph>
            McLaren Automotive is a British luxury automotive manufacturer based in 
            Woking, Surrey, England. The company is a part of the McLaren Group, which 
            was founded by Bruce McLaren in 1963 as a racing team.
          </Typography>
          <Typography paragraph>
            Initially known for its success in Formula One racing, McLaren expanded into 
            road car production in the early 1990s with the McLaren F1, which became one 
            of the most iconic supercars of its time.
          </Typography>
          <Typography paragraph>
            Today, McLaren is renowned for producing high-performance sports cars and 
            supercars that combine cutting-edge technology, exceptional engineering, and 
            breathtaking design.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default MclarenPage;