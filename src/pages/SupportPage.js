// src/pages/SupportPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Typography, 
  Container, 
  Box, 
  Button, 
  Paper 
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const SupportPage = () => {
  const navigate = useNavigate();

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
          Support
        </Typography>

        <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 3, color: 'primary.main', textAlign: 'center' }}>
            Contact Information
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 3 
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2 
            }}>
              <EmailIcon sx={{ fontSize: 30, color: 'primary.main' }} />
              <Typography variant="h6">
                Email: support@vintagecar.co
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2 
            }}>
              <PhoneIcon sx={{ fontSize: 30, color: 'primary.main' }} />
              <Typography variant="h6">
                Phone: +1 (555) 123-4567
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 3, color: 'primary.main', textAlign: 'center' }}>
            Support Hours
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Our support team is available Monday through Friday, 9:00 AM to 5:00 PM EST.
            We typically respond to emails within 24 hours during business days.
          </Typography>
        </Paper>
      </Paper>
    </Container>
  );
};

export default SupportPage;