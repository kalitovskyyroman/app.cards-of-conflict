import { ReactElement } from 'react';
import SelectGame from '../src/modules/SelectGame';
import { IPageWithLayout, MenuLayout } from '../src/shared';

const Home: IPageWithLayout = () => <SelectGame />;

Home.getLayout = function getLayout(page: ReactElement) {
    return <MenuLayout>{page}</MenuLayout>;
};
export default Home;
