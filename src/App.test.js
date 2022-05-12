import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header/Header';

describe('App.js', () => {

   const setup = () => render(<App />);

   beforeEach(() => {
      // other stuff...
   });

   it('should contain a header', () => {
      setup();
      expect(screen.getByRole("banner")).toBeInTheDocument();
   })

   it('should contain a paragraph', () => {
      setup();
      expect(screen.getByText('Pokemon API')).toBeInTheDocument();
   })

})