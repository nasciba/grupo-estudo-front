import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
describe('App.js', ()=> {
 it('should contain a paragraph', () => {
    render(<App/>);
    expect(screen.getByText('Edit src/App.js and save to reload.')).toBeInTheDocument();
 })
} )