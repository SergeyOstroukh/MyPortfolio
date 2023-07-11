import React from 'react';
import s from './Header.module.css'


export const Header = () => {
    return (
        <header className={s.headerWrapper}>
            <div className={s.headerConteiner}>
                <nav className={s.header_nav}>
                    <a href={'#main'}>Главное</a>
                    <a href={'#skills'}>Скилы</a>
                    <a href={'#projects'}>Проеты</a>
                    <a href={'#contacts'}>Контакты</a>
                </nav>
            </div>
        </header>
    );
};

