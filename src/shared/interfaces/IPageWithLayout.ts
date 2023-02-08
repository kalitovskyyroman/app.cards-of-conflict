import { FunctionComponent, ReactElement } from 'react';

interface IPageWithLayout extends FunctionComponent {
    getLayout?: (page: ReactElement) => ReactElement;
}

export default IPageWithLayout;
