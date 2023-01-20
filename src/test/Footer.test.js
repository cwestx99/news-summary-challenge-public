import { render } from '@testing-library/react';
import Footer from '../Components/Footer';

test(`Footer matches snapshot`, () => {
    const mockFooter = render(<Footer />);
    expect(mockFooter).toMatchSnapshot();
});