import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header/Header';

describe('App.js', () => {

   const setup = () => render(<App />);

   it('should contain a header', () => {
      setup();
      expect(screen.getByRole("banner")).toBeInTheDocument();
   })

   it('should contain a footer', () => {
      setup();
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
   })

})