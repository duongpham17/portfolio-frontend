import styles from './Navbar.module.scss';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image'

import {AiOutlineMenu} from 'react-icons/ai';

import SlideIn from 'components/slideIn';

import Information from './Information';

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

export const Navbar = () =>
(
    <div className={styles.container}>
        <Link href="/"><a className="button"><Image src="/assets/logo.webp" width={45} height={45}/></a></Link>
        <SlideIn id="slidein" top={<ThemeToggle/>} touch={<AiOutlineMenu className="icon-2"/>} information={<Information/>}/>
    </div>
)

export default Navbar