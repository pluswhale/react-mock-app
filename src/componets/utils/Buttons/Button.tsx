// @flow 
import * as React from 'react';
import search_icon from '../../../assets/img/icons/searh_icon.png';
import './button.scss';

type Props = {
    
};
export const Button = (props: Props) => {
    return (
        <a className="main-btn" href="#"> <img src={search_icon} alt="search_icon"/> Преподователи</a>
    );
};