import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerWrapper} id='contacts'>
            <div className={s.footerContainer}>
                <div className={s.footerTextName}>
                    <h3>Chebyrator</h3>
                </div>
                <div className={s.footerImages}>
                    <a href=""><img src="https://cdn-icons-png.flaticon.com/512/38/38401.png" alt=""/></a>
                    <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt=""/></a>
                    <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png" alt=""/></a>
                    <a href=""><img src="https://freelogopng.com/images/all_img/1658587303instagram-png.png" alt=""/></a>
                </div>
                <div className={s.footerTextInfo}>
                    <p>2019 Все права защищены</p>
                </div>
            </div>
        </div>
    );
};

