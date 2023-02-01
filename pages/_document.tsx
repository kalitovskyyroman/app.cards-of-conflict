import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionCache from '../src/styles/createEmotionCache';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../src/styles/theme';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <meta content={theme.palette.primary.main} name="theme-color" />
                    <link href="/favicon.ico" rel="shortcut icon" />
                    <meta content="" name="emotion-insertion-point" />
                    {(this.props as any).emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};
