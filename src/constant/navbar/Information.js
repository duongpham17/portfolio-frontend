import styles from './Information.module.scss'
import Link from 'next/link';

const Information = () => 
(
    <div className={styles.container}>
        <Link href="/portfolio"><a>Portfolio</a></Link>
    </div>
)


export default Information
