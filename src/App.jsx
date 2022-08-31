import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { EntryPage, AnalysisPage } from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<EntryPage />} />
            <Route path="/analysis/:url" element={<AnalysisPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
