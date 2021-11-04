import styles from './SlideIn.module.scss';
import React from 'react';
import {BsArrowLeft} from 'react-icons/bs';
import ContextSlideInProvider, {useContextSlideIn} from './useContextSlideIn';

const SlideIn = (props) => (
    <ContextSlideInProvider>
        <SlideInContainer {...props}/>
    </ContextSlideInProvider>
)

const SlideInContainer = (props) => {

    const {id: ID, touch, top, information} = props;

    const {id, setId} = useContextSlideIn();

    const onClose = () => setId("");

    const onOpen = () => {
        if(id) onClose();
        if(!id || id !== ID) setId(ID);
    };

    const stopPropergation = e => e.stopPropagation();

    const TopSection = () => (
        <div className={`${styles.topSection} flex-between`}>
            <button onClick={onClose}><BsArrowLeft className="icon-1"/></button>
            {top || null}
       </div>
    )

    return (
        <div className={styles.container}>

            <div className={styles.touch} onClick={onOpen}>
                {touch}
            </div>

            {id === ID &&
                <div className="cover" onClick={onClose}>
                    <div className={styles.slideIn} onClick={stopPropergation}>

                        <TopSection/>

                        {information}

                    </div>
                </div>
            }
        </div>
    )
}

export default SlideIn;
