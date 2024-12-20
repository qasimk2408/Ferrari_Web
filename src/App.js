// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import HomePage from './components/HomePage';
import LamborghiniPage from './pages/LamborghiniPage';
import FerrariPage from './pages/FerrariPage';
import MclarenPage from './pages/MclarenPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lamborghini" element={<LamborghiniPage />} />
          <Route path="/ferrari" element={<FerrariPage />} />
          <Route path="/mclaren" element={<MclarenPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;