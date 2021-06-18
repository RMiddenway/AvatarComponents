import React from 'react';
import { BackgroundNightStars } from './Items/Backgrounds/BackgroundNightStars';
import { BackgroundDayClouds }from './Items/Backgrounds/BackgroundDayClouds';
import { NullItem } from './Items/NullItem';


const getBackground = (componentName) => {
    switch(componentName) {
        case "BackgroundNightStars":
            return <BackgroundNightStars/>;
        case "BackgroundDayClouds":
            return <BackgroundDayClouds/>;
        case "NullItem":
            return <NullItem/>
        default:
            console.log("Unknown component name");
    }

}

export const Background = ({componentName}) => {
    return ( 
        <>
            {getBackground(componentName)}
        </>
     )
}
