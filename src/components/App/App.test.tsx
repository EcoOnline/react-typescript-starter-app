import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    test('renders welcome text', () => {
        render(<App />)
        const linkElement = screen.getByText(/Welcome to react-typescript-starter-app/i)
        expect(linkElement).toBeInTheDocument()
    })
})
