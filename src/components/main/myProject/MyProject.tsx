import React from 'react';
import s from './MyProject.module.css'

export const MyProject = () => {
    return (
        <div className={s.MyProjectWrapper} id='projects'>
            <div className={s.MyProjectConteiner}>
                <div className={s.MyProjectContainerText}>
                    Мои работы
                </div>
                <div className={s.MyProjectContainerItems}>
                    <div className={s.itemBlock}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkKXKOo3pHI_yTIDxYZcs7w2jgmgjXGGYv5O0n93Cxo3Wsy3wTjkISOm6SdT_wMFyL40&usqp=CAU'/>
                        <h2>Печька</h2>
                        <p>и так сойдет!</p>
                    </div>
                    <div className={s.itemBlock}>
                        <img  src='https://img2.joyreactor.cc/pics/post/%D0%B3%D0%B8%D1%84%D0%BA%D0%B8-%D0%BA%D0%BE%D1%80%D0%BE%D0%B2%D0%B0-%D0%BD%D0%B0%D1%80%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-3256430.gif'/>
                        <h2>Самоход</h2>
                        <p>маленькие ножки бегут по дорожке:)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

