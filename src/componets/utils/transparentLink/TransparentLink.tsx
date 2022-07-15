// @flow 
import * as React from 'react';
import './transparentLink.scss';
import calendar from '../../../assets/img/icons/calendar-icon.png';
type Props = {
    title: string,
    icon: string,
};
export const TransparentLink = (props: Props) => {
    return (
    <a className="transparent-btn-left-bottom" href="#">
        <img src={props.icon} alt="calendar-icon" />
        {props.title}
    </a>
    );
};