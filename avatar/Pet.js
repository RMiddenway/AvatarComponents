import React from 'react';
import { NullItem } from './Items/NullItem';
import { CatBlack } from './Items/Pets/CatBlack';



const getPet = (componentName) => {
    switch(componentName) {
        case "CatBlack":
            return <CatBlack/>;
        case "NullItem:":
            return <NullItem/>;
    }

}

export const Pet = ({componentName}) => {
    return ( 
        <>
            {getPet(componentName)}
        </>
     )
}
 