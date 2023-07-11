import React from 'react';
import {MyProfile} from "./myProfile/MyProfile";
import {MySkills} from "./mySkills/MySkills";
import {MyProject} from "./myProject/MyProject";
import {Contacts} from "./contacts/Contacts";

export const Main = () => {
    return (
        <div>
            <MyProfile />
            <MySkills />
            <MyProject />
            <Contacts />
        </div>
    );
};

