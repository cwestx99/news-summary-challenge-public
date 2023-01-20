import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Components/Header';

test(`Header matches snapshot`, () => {
    const mockHeader = render(<MemoryRouter><Header /></MemoryRouter>);
    expect(mockHeader).toMatchSnapshot();
});