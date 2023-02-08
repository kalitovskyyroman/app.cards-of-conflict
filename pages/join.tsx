import type { ReactElement } from 'react';
import JoinGame from '../src/modules/JoinGame';
import { IPageWithLayout, MenuLayout } from '../src/shared';

const Join: IPageWithLayout = () => <JoinGame />;

Join.getLayout = function getLayout(page: ReactElement) {
    return <MenuLayout>{page}</MenuLayout>;
};

export default Join;
