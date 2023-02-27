import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Sidebar } from '../../components/Sidebar';

const MainPage = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;
