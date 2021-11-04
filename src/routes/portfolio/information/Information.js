import styles from './Information.module.scss';
import React, {useState} from 'react';

import Utils from './Utils';
import Header from './Header';
import Select from './Select';
import Coins from './Coins';
import View from './View';
import DeleteWarning from './DeleteWarning';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import generateID from 'utils/generateID';

const Data = ({context}) => {

    const {portfolioData, portfolio_reorder} = context;

    const [deleteWarning, setDeleteWarning] = useState({
        index: "",
        warning: false
    });

    const onDragEnd = (e) => {
        if(!e.source || !e.destination) return;

        const [source, destination ]= [e.source.index, e.destination.index];

        portfolio_reorder(source, destination);
    };

    return (
        <div className={styles.container}>

            <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
                <Droppable droppableId="droppable-1">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} >
                            {portfolioData.map((el, i) => 
                              <Draggable key={generateID()} draggableId={`draggable-${i}`} index={i}>
                                    {(provided, snapshot) => (
                                    <div className={`${styles.portfolio} ${snapshot.isDragging && styles.isDragging}`} ref={provided.innerRef} {...provided.draggableProps}>
                                        
                                        <Utils provided={provided} setDeleteWarning={() => setDeleteWarning({warning: true, index: i})}/>

                                        <Header data={el} context={context}/>

                                        <View data={el}>

                                            <Select data={el} index={i} context={context} />

                                            <Coins data={el} index={i} context={context} />

                                        </View>

                                    </div>
                                )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            
            <DeleteWarning context={context} deleteWarning={deleteWarning} setDeleteWarning={setDeleteWarning}/>

        </div>
    )
}

export default Data
