import React from 'react';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';
import { Sidebar } from '../../components/Sidebar';

const MainPage = () => {
  return (
    <div>
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;
