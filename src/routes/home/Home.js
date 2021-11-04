import styles from './Home.module.scss';
import Image from 'next/image';

import generateID from 'utils/generateID';

import {useContextData} from 'hooks/useContextData';

const Home = (props) => {

    const {price} = useContextData();

    const {
        cardano_news,
        ergo_news, 
    } = props;

    const CreateFeed = ({name, price, news}) => (
        <>
            <div className={styles["coin-name"]}>
                <Image src={`/icon/${name}.png`} alt="crypto logo" width={30} height={30}/>
                <span><b>{name.substring(0, 1).toUpperCase() + name.substring(1)} £{price}</b> </span>
                <span>Latest News</span>
            </div>
            <div className={styles["coin-news"]}>
                {news.map(el => 
                    <div key={generateID()}>
                        <ul>
                            <li>{el.date}</li>
                            <li className={styles.title} ><a href={el.link} target = "_blank" rel = "noopener noreferrer">{el.title}</a></li>
                            <li>{el.description}</li>
                        </ul>
                       {el.image && <a href={el.link} target = "_blank" rel = "noopener noreferrer"><img src={el.image} alt="thumbnail"/></a>}
                    </div>
                )}
            </div>
        </>
    )

    return (
        <div className={styles.container}>

            <CreateFeed name="cardano" price={price.ada} news={cardano_news}/>

            <CreateFeed name="ergo" price={price.erg} news={ergo_news} />

        </div>
    )
}

export default Home
