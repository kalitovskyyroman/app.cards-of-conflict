import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MenuLayout from '../menu-layout';

describe('MenuLayout component', () => {
    it('Render component', () => {
        const { container } = render(<MenuLayout>text</MenuLayout>);
        expect(container).toMatchSnapshot();
    });

    it('Render with text', () => {
        const mockText = 'mock text';
        const testId = 'test-id';

        render(
            <MenuLayout>
                <div data-testid={testId}>{mockText}</div>
            </MenuLayout>
        );

        expect(screen.getByTestId(testId)).toHaveTextContent(mockText);
    });
});
