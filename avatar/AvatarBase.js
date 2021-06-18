
import React from 'react'
import { useSelector } from "react-redux";

import { Svg } from 'react-native-svg'
import { View } from "react-native";
import { Hat } from './Hat';
import { Head } from './Head';
import { Body } from './Body';
import { Eyes } from './Eyes';
import { Glasses } from './Glasses';
import { Uniform } from './Uniform';
import { Background } from './Background';
import { Pet } from './Pet';
import { Hair } from './Hair';
import { NullItem } from './Items/NullItem';
import { GuideItem } from './Items/GuideItem';


export const AvatarBase = () => {
    let currentOutfit = useSelector(state => state.entities.avatar.outfit);
    let background = {componentName: "NullItem"};
    let body = {componentName: "NullItem"};
    let head = {componentName: "NullItem"};
    let hair = {componentName: "NullItem"};
    let eyes = {componentName: "NullItem"};
    let glasses = {componentName: "NullItem"};
    let uniform = {componentName: "NullItem"};
    let hat = {componentName: "NullItem"};
    let pet = {componentName: "NullItem"};

    if(currentOutfit[0] !== undefined) {
        background = currentOutfit.find(obj => obj.type == "BACKGROUND");
        body = currentOutfit.find(obj => obj.type === "BODY");
        head = currentOutfit.find(obj => obj.type === "HEAD");
        hair = currentOutfit.find(obj => obj.type === "HAIR");
        eyes = currentOutfit.find(obj => obj.type === "EYES");
        glasses = currentOutfit.find(obj => obj.type === "GLASSES");
        uniform = currentOutfit.find(obj => obj.type === "UNIFORM");
        hat = currentOutfit.find(obj => obj.type === "HAT");
        pet = currentOutfit.find(obj => obj.type === "PET");
    }
    return (
        <>
        <View>
            <Svg viewBox="0 0 1000 2400"
            height = "100%" width = "100%"
                >
                {/* <GuideItem/> */}
                <Background componentName={background != null ? background.componentName : "NullItem"}/>
                {hat.componentName === "NullItem" 
                ? <Hair componentName={hair != null ? hair.componentName : "NullItem"} layer="Back"/>
                : <NullItem/>}
                {/* If a uniform is there, show it, if no uniform, show basic body */}
                {uniform.componentName === 'NullItem' 
                ? <Body componentName={body != null ? body.componentName : "NullItem"}/>
                : <Uniform componentName={uniform != null ? uniform.componentName : "NullItem"}/>
                }
                
                
                <Head componentName={head != null ? head.componentName : "NullItem"}/>
                <Eyes componentName={head != null ? eyes.componentName : "NullItem"}/>
                <Glasses componentName={head != null ? glasses.componentName : "NullItem"}/>
                {/* Hair only shows if no hat */}
                {hat.componentName === "NullItem" 
                ? <Hair componentName={hair != null ? hair.componentName : "NullItem"} layer="Front"/>
                : <NullItem/>}
                
                <Hat componentName={hat != null ? hat.componentName : "NullItem"} />
                <Pet componentName={pet != null ? pet.componentName : "NullItem"}/>
                
            </Svg>
        </View>
        </>
    )
}

