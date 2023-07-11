import React from 'react';
import s from './Profile.module.css'

export const MyProfile = () => {
    return (
        <div className={s.profileWrapper} id='main'>
            <div className={s.profileMain}>
                <div className={s.profileInfo}>
                    <span>Hi There</span>
                    <h1>I'am Sergey Ostroukh</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.profileImg}>
                    <img src='https://icdn.lenta.ru/images/2020/04/23/16/20200423160206740/square_1280_5d66d296d9fcfd16c65acbcd7a346f18.png' alt="img"/>
                </div>
            </div>
        </div>
    );
};

