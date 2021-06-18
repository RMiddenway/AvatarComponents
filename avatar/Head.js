import React from 'react';
import { MaleHead1 } from './Items/Heads/MaleHead1';
import { MaleHead2 } from './Items/Heads/MaleHead2';
import { FemaleHead1 } from './Items/Heads/FemaleHead1';
import { FemaleHead2 } from './Items/Heads/FemaleHead2';
import { useSelector } from "react-redux";


const getHead = (componentName) => {
    var headColour  = useSelector((state) => state.entities.avatar.avatarcomponentcolors.headColour);
    switch(componentName) {
        case "MaleHead1":
            return <MaleHead1 colour={headColour}/>;
        case "MaleHead2":
            return <MaleHead2 colour={headColour}/>;
        case "FemaleHead1":
            return <FemaleHead1 colour={headColour}/>
        case "FemaleHead2":
            return <FemaleHead2 colour={headColour}/>

    }

}

export const Head = ({componentName}) => {
    return ( 
        <>
            {getHead(componentName)}
        </>
     )
}
 