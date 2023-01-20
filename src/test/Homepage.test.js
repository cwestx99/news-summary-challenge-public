import { render, screen } from '@testing-library/react';
import mockNewsData from '../../mockNewsData.json';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';

describe('Homepage tests', () => {
    it('it should render the correct number of Headlines based on the length of the given prop.', () => {
        const mockArticle = mockNewsData.response.results;
        render(<MemoryRouter>< HomePage news={mockArticle} /></MemoryRouter>)
        const numberOfHeadlines = screen.getAllByTestId("headlines").length;
        expect(numberOfHeadlines).toBe(mockArticle.length);
    })
})
