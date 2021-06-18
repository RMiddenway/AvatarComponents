import React, { Component } from 'react';
import { NullItem } from './Items/NullItem';
import { ScrubsFullBody1 } from './Items/Uniform/ScrubsFullBody1';
import { ScrubsFullBody2 } from './Items/Uniform/ScrubsFullBody2';
import { ScrubsFullBody3 } from './Items/Uniform/ScrubsFullBody3';



const getUniform = (componentName) => {
    switch(componentName) {
        case "ScrubsFullBody1":
            return <ScrubsFullBody1/>;
        case "ScrubsFullBody2":
            return <ScrubsFullBody2/>;
        case "ScrubsFullBody3":
            return <ScrubsFullBody3/>;
        case "NullItem":
            return <NullItem/>;

    }

}

export const Uniform = ({componentName}) => {
    return ( 
        <>
            {getUniform(componentName)}
        </>
     )
}
 