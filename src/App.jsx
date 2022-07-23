import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles';
import { EntryPage, AnalysisPage } from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/analyze" element={<AnalysisPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
