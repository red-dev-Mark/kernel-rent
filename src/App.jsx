import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routers/Router';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
