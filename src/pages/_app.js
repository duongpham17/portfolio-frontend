import 'styles/index.scss';
import progress from 'utils/progress';
import Layout from 'components/layout';

progress();

export const _App = ({ Component, pageProps }) => 
(
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

export default _App;