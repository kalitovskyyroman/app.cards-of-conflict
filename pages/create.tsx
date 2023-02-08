import { ReactElement } from 'react';
import CreateGame from '../src/modules/CreateGame';
import {IPageWithLayout, MenuLayout} from '../src/shared';

const Create: IPageWithLayout = () => <CreateGame />;

Create.getLayout = function getLayout(page: ReactElement) {
    return <MenuLayout>{page}</MenuLayout>;
};

export default Create;
