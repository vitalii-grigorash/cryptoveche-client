import React from "react";
import './ MyProfilePage.css';
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import MyProfilePagePersonalData from "../ MyProfilePagePersonalData/ MyProfilePagePersonalData";
import MyProfilePageAdditionalSettings from "../ MyProfilePageAdditionalSettings/ MyProfilePageAdditionalSettings";
import CalendarVotes from "../CalendarVotes/CalendarVotes";
import MyProfilePageSetPassword from "../ MyProfilePageSetPassword/ MyProfilePageSetPassword";

const MyProfilePage = () => {

    return (
            <div className={'my-profile-page__wrapper'}>
                <TitleVotesDetailsCallVotingProfile firstLetter={'Главная'} secondLetter={'Мой профиль'} titleName={'Мой профиль'}/>
                   <div className={'my-profile-page__main-content'}>
                        <MyProfilePagePersonalData/>
                        <MyProfilePageAdditionalSettings/>
                       <MyProfilePageSetPassword/>
                       <CalendarVotes/>
                   </div>
            </div>
    )
}
export default MyProfilePage;