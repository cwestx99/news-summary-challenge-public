import { render, screen } from '@testing-library/react';
import mockNewsData from '../../mockNewsData.json';
import FullArticle from '../Components/FullArticle';

describe('FullArticle tests', () => {

    const mockArticle = mockNewsData.response.results[0].fields;

    it('it should render the correct thumbnail from the given prop', () => {
        render(<FullArticle articleBodyText={mockArticle.thumbnail} />);
        const result = screen.getByText(mockArticle.thumbnail);
        expect(result).toBeInTheDocument;
    })

    it('it should render the correct headline from the given prop', () => {
        render(<FullArticle articleHeadline={mockArticle.headline} />);
        const result = screen.getByText(mockArticle.headline);
        expect(result).toBeInTheDocument;
    })

    it('it should render the correct article text from the given prop', () => {
        render(<FullArticle articleBodyText={mockArticle.bodyText} />);
        const result = screen.getByText(mockArticle.bodyText);
        expect(result).toBeInTheDocument;
    })

})