import React from 'react';
import { NullItem } from './Items/NullItem';
import { HairFemale1Front, HairFemale1Back } from './Items/Hair/HairFemale1';
import { HairFemale2Front, HairFemale2Back } from './Items/Hair/HairFemale2';
import { HairFemale3Front, HairFemale3Back } from './Items/Hair/HairFemale3';


const getHair = (componentName) => {
    switch(componentName) {
        case "HairFemale1Front":
            return <HairFemale1Front/>;
        case "HairFemale1Back":
            return <HairFemale1Back/>;
            case "HairFemale2Front":
                return <HairFemale2Front/>;
            case "HairFemale2Back":
                return <HairFemale2Back/>;
                case "HairFemale3Front":
            return <HairFemale3Front/>;
        case "HairFemale3Back":
            return <HairFemale3Back/>;
        case "NullItem":
            return <NullItem/>;
    }

}

export const Hair = ({componentName, layer}) => {
    return ( 
        <>
            {getHair(componentName + layer)}
        </>
     )
}
 