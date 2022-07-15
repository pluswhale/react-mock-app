// @flow 
import * as React from 'react';
import './transparentLinkTeachers.scss';
type Props = {
    title: string,
    icon: string,
};
export const TransparentLinkTeachers = (props: Props) => {
    return (
        <a className="transparent-btn-right-bottom" href="#">
        <img src={props.icon} alt="calendar-icon" />
        {props.title}
    </a>
    );
};