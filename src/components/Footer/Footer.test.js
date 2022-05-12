import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe("Footer component", () => {
    it("Should contain github logo", () => {
        render(<Footer/>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
})