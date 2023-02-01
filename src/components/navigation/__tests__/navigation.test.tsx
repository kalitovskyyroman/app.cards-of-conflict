import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation, { IButton } from '../navigation';

const testIdLeft = 'left-btn';
const testIdRight = 'right-btn';

const leftButtonTitleMock = 'left';
const rightButtonTitleMock = 'right';

const leftButton: IButton = { title: leftButtonTitleMock };
const rightButton: IButton = { title: rightButtonTitleMock };

describe('Navigation component', () => {
    it('render component', () => {
        const { container } = render(<Navigation leftButton={leftButton} rightButton={rightButton} />);
        expect(container).toMatchSnapshot();
    });

    it('render titles', () => {
        render(<Navigation leftButton={leftButton} rightButton={rightButton} />);

        expect(screen.getByTestId(testIdLeft)).toHaveTextContent(leftButtonTitleMock);
        expect(screen.getByTestId(testIdRight)).toHaveTextContent(rightButtonTitleMock);
    });

    it('test clicks', () => {
        const handleLeftClick = jest.fn();
        const handleRightClick = jest.fn();

        leftButton.onClick = handleLeftClick;
        rightButton.onClick = handleRightClick;

        render(<Navigation leftButton={leftButton} rightButton={rightButton} />);

        const leftBtn = screen.getByTestId(testIdLeft);
        const rightBtn = screen.getByTestId(testIdRight);

        expect(handleLeftClick).toBeCalledTimes(0);
        expect(handleLeftClick).toBeCalledTimes(0);

        fireEvent.click(leftBtn);
        expect(handleLeftClick).toBeCalledTimes(1);

        fireEvent.click(rightBtn);
        expect(handleRightClick).toBeCalledTimes(1);
    });
});
