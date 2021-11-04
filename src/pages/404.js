import Link from 'next/link';
export const NotFound = () => 
(
    <section className="center">
        <h1>
            <Link href='/'><a>404 | Route is unknown</a></Link>
        </h1>
    </section>
)

export default NotFound