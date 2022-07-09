import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { EntryPage, AnalysisPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/analyze/:url" element={<AnalysisPage />} />
    </Routes>
  );
}

export default App;
