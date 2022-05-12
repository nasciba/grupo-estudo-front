import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe("Header component", () => {
    it("Should contain header image", () => {
        render(<Header/>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
})