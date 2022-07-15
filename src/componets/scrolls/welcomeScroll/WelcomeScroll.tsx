// @flow 
import * as React from 'react';
import {Button} from '../../utils/Buttons/Button';
import { TransparentLink } from '../../utils/transparentLink/TransparentLink';
import '../../../styles/components/welcomeScroll.scss';

import comp_icon from '../../../assets/img/icons/computer.png';
import geld_icon from '../../../assets/img/icons/Geld.png';
import calendar_icon from '../../../assets/img/icons/calendar-icon.png';
import star_icon from '../../../assets/img/icons/star.png';
import emodzi_teacher from '../../../assets/img/icons/emodzi-teacher.png';

import { TransparentLinkRate } from '../../utils/transparentLink/TransparentLinkRate';
import { TransparentLinkTeachers } from '../../utils/transparentLink/TransparentLinkTeachers';

type Props = {
    
};
export const WelcomeScroll = (props: Props) => {
    return (
        <div>
            <div className="welcomescroll">
                <div className="container">
                    <div className="intro__school">
                        <h1>Самая большая <br/> школа у вас <span className='stylized-text-yellow'>Дома!</span></h1>

                        <div className="intro__conditions">
                            <p> 
                                <img src={comp_icon} alt="comp-icon"/>
                                Индивидуальное обучение дистанционно
                            </p>
                        </div>
                        <Button />
                        <div className="intro__conditions">
                            <p> 
                                <img src={geld_icon} alt="geld-icon" /> 
                                Гарантия возврата денег
                            </p>
                        </div>
                    </div>
                    <div className="intro__student">
                        <TransparentLink title="Личный кабинет с графиком занятий" icon={calendar_icon}/>
                        <TransparentLinkRate title="5.0" icon={star_icon}/>
                        <TransparentLinkTeachers title="Проверенные преподователи" icon={emodzi_teacher}/>
                    </div>
                </div>
            </div>
        </div>
    );
};