import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsWrapper}>
            <div className={s.contactsContainer}>
                <div className={s.contactsItem}>
                    контакты
                </div>
                <div className={s.contactsItemForm}>
                    <input/>
                    <input/>
                    <textarea/>
                </div>
                <div className={s.contactsIitemText}>
                    отправить
                </div>
            </div>
        </div>
    );
};

