import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../features/about/About';
import Catalog from '../../features/catalog/Catalog';
import Contact from '../../features/contact/Contact';
import ProductDetails from '../../features/details/ProductDetails';
import Home from '../../features/home/Home';
import Header from './Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  //palletType
  const palleteType = darkMode ? 'dark' : 'light';
  ///theme config
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === 'light' ? '#DCDCDC' : '#121212',
      },
    },
  });

  const themeChangeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={themeChangeHandler} />
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
