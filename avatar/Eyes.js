import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

import { EyesClosed } from './Items/Eyes/EyesClosed';
import { EyesFemale1 } from './Items/Eyes/EyesFemale1';
import { EyesNeutral1 } from './Items/Eyes/EyesNeutral1';

const getEyes = (componentName) => {
    switch(componentName) {
        case "EyesNeutral1":
            return <EyesNeutral1/>;
        case "EyesFemale1":
            return <EyesFemale1/>;
    }
}

export const Eyes = ({componentName}) => {
    const [eyesOpen, setEyesOpen] = useState(true);

    function setEyes(){
        setEyesOpen(!eyesOpen)
      }
      // eyesOpen is flipped. Then, if true, useInterval waits between 2 and 5 seconds. If false
      // useInterval waits 200ms.
      useInterval(() => {
        setEyes();
      }, eyesOpen ? Math.random() * (5000 - 2000) + 2000 : 200);
      // Closed or selected open eyes are rendered based on whether eyesOpen is true or false
    return ( 
        <>
            {eyesOpen ? getEyes(componentName) : <EyesClosed/>}
        </>
     )
}
 