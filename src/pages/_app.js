import 'styles/index.scss';
import progress from 'utils/progress';
import Layout from 'components/layout';
import ContextThemeProvider from 'hooks/useContextTheme';

progress();

export const _App = ({ Component, pageProps }) => 
(   
    <ContextThemeProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ContextThemeProvider>
)

export default _App;