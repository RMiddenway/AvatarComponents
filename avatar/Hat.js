import React from 'react';
import { ScrubCap } from './Items/Hats/ScrubCap';
import { ScrubCapBun } from './Items/Hats/ScrubCapBun';
import { ScrubCapTransparent } from './Items/Hats/ScrubCapTransparent';
import { NullItem } from './Items/NullItem';


const getHat = (componentName, colour) => {

    console.log(colour);
    switch(componentName) {
        case "ScrubCap": 
            return <ScrubCap colour={colour}/>;
        case "ScrubCapBun":
            return <ScrubCapBun/>
        case "ScrubCapTransparent":
            return <ScrubCapTransparent/>
        case "NullItem":
            return <NullItem/>
    }

}

export const Hat = ({componentName, colour}) => {
    return ( 
        <>
            {getHat(componentName, colour)}
        </>
     )
}