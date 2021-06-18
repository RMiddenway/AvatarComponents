import React from 'react';
import { BodyFemale1 } from './Items/Bodies/BodyFemale1';
import { BodyMale1 } from './Items/Bodies/BodyMale1';

const getBody = (componentName) => {
    switch(componentName) {
        case "MaleBody1":
            return <BodyMale1/>;
        case "FemaleBody1":
            return <BodyFemale1/>;
    }

}

export const Body = ({componentName}) => {
    return ( 
        <>
            {getBody(componentName)}
        </>
     )
}
 