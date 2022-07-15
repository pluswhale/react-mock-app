
// @flow 
import * as React from 'react';
import '../../../styles/components/Header.scss';
import logo_img from '../../../assets/img/Logo.png';
import notification_img from '../../../assets/img/Notifications.png';
import logged_img from '../../../assets/img/Loged_icon.png';

type Props = {
    
};

export const Header = (props: Props) => {
    return (
        <div className='header'>
            <div className="container">
                <img src={logo_img} alt="main-logo" className="header__logo" />
                <div className="nav__line">
                    <ul>
                        <li className='nav__item'><a href="#">О проекте</a></li>
                        <li className='nav__item'><a href="#">Преподователи</a></li>
                        <li className='nav__item'><a href="#">Курсы</a></li>
                        <li className='nav__item'><a href="#">Вебинары</a></li>
                        <li className='nav__item'><a href="#">Помощь</a></li>
                    </ul>
                </div>
                <div className="nav__login">
                    <ul>
                        <li className="nav__notification"><a href="#"><img src={notification_img} alt="notification-icon" /></a></li>
                        <li className="nav__logged"><a href="#"><img src={logged_img} alt="logged-icon" /></a></li>
                    </ul>
                </div>
            </div>  
        </div>
    );
};