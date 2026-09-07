import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import { LenisProvider } from './components/LenisProvider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LenisProvider>
          <App />
        </LenisProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
