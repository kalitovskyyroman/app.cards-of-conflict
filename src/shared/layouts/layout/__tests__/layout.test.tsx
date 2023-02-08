import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../layout';

describe('Layout component', () => {
    it('Render component', () => {
        const { container } = render(<Layout>text</Layout>);
        expect(container).toMatchSnapshot();
    });

    it('Render with text', () => {
        const mockText = 'mock text';
        const testId = 'test-id';

        render(
            <Layout>
                <div data-testid={testId}>{mockText}</div>
            </Layout>
        );

        expect(screen.getByTestId(testId)).toHaveTextContent(mockText);
    });
});
