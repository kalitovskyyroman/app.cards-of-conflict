import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../src/styles/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/styles/createEmotionCache';
import Layout from '../src/components/layouts/layout/layout';

const clientSideEmotionCache = createEmotionCache();

// eslint-disable-next-line @typescript-eslint/ban-types
type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
}

interface IMyApp extends AppPropsWithLayout {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: IMyApp) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Cards Of Conflict</title>
                <meta content="initial-scale=1, width=device-width" name="viewport" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
            </ThemeProvider>
        </CacheProvider>
    );
}
