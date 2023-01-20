import { render, screen } from '@testing-library/react';
import mockNewsData from '../../mockNewsData.json';
import { MemoryRouter } from 'react-router-dom';
import Headlines from '../components/Headlines';

describe('Headlines tests', () => {
    it('it should render the correct Headline based on the given prop.', () => {
        const mockArticle = mockNewsData.response.results[0];
        render(<MemoryRouter><Headlines
            key={mockArticle.id}
            route={mockArticle.id.replaceAll('/', '-')}
            articleThumbnail={mockArticle.fields.thumbnail}
            articleHeadline={mockArticle.fields.headline}
        /></MemoryRouter>)
        expect(mockArticle.id).toBeInTheDocument;
    })
})
