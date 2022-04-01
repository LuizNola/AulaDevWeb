import React from 'react';
import { MainRoutes } from './router';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <GlobalStyles styles={{body: {backgroundColor: "#e9e9e9"}}}/>
      <MainRoutes/>
      <Footer/>
    </>
  );
}

export default App;
