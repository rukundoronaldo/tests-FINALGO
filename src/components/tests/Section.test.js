import { render , screen, cleanup} from "@testing-library/react";
import Section from '../Section';


afterEach(() => {
    cleanup();
});

test('render section component', () => {
    render(<Section />);
    const SectionElement = screen.getByTestId('section-1');
    expect(SectionElement).toBeInTheDocument();
    //expect(SectionElement).toHaveTextContent('titre 1 Lorem ipsum')
    expect(SectionElement).toContainHTML('<h5>')
});