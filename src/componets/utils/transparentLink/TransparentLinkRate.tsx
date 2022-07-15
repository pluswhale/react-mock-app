// @flow 
import * as React from 'react';
import './transparentLinkRate.scss';

type Props = {
    title: string,
    icon: string,
};
export const TransparentLinkRate = (props: Props) => {

    //делает первый литерал тайтла большим размером, а другую часть оставляет прежнимм 
    //я не уверен что это правильно, но другого решения не придумал
    const firstLetter = props.title.charAt(0); 
    const anotherLetter = props.title.slice(1, props.title.length)


    return (
        <a className="transparent-btn-left-top" href="#">
            <span>{firstLetter}</span> {anotherLetter}
        <img className='first-star' src={props.icon} alt="star-icon" />
        <img src={props.icon} alt="star-icon" />
        <img src={props.icon} alt="star-icon" />
        <img src={props.icon} alt="star-icon" />
        <img src={props.icon} alt="star-icon" />
        <img src={props.icon} alt="star-icon" />
    </a>
    );
};