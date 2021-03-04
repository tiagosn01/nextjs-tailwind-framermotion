import React from 'react';
import Header from './Header';

// import { Container } from './styles';


const Layout: React.FC = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 sm:px-6">
      <Header />
      {children}
    </div>
  );
}

export default Layout;