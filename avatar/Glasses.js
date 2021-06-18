import React from 'react';
import { Glasses1 } from './Items/Glasses/Glasses1';
import { Glasses2 } from './Items/Glasses/Glasses2';
import { Glasses3 } from './Items/Glasses/Glasses3';
import { Glasses4 } from './Items/Glasses/Glasses4';
import { NullItem } from './Items/NullItem';



const getGlasses = (componentName) => {
    switch(componentName) {
        case "Glasses1":
            return <Glasses1/>;
        case "Glasses2":
            return <Glasses2/>;
        case "Glasses3":
            return <Glasses3/>;
        case "Glasses4":
            return <Glasses4/>;
        case "NullItem":
            return <NullItem/>;

    }

}

export const Glasses = ({componentName}) => {
    return ( 
        <>
            {getGlasses(componentName)}
        </>
     )
}
 