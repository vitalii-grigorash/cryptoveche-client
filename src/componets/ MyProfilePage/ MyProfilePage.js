import React from "react";
import './ MyProfilePage.css';
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import MyProfilePagePersonalData from "../ MyProfilePagePersonalData/ MyProfilePagePersonalData";

const MyProfilePage = () => {

    return (
            <div className={'my-profile-page__wrapper'}>
                <TitleVotesDetailsCallVotingProfile firstLetter={'Главная'} secondLetter={'Мой профиль'} titleName={'Мой профиль'}/>
                   <div className={'my-profile-page__main-content'}>
                        <MyProfilePagePersonalData/>

                   </div>
            </div>
    )
}
export default MyProfilePage;