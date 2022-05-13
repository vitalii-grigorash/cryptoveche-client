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
                       <div className={'grid-item_1'}>
                            <MyProfilePagePersonalData/>
                       </div>
                       <div className={'grid-item_2'}>
                             <MyProfilePageAdditionalSettings/>
                       </div>
                       <div className={'grid-item_3'}>
                           <CalendarVotes/>
                       </div>
                       <div className={'grid-item_4'}>
                           <MyProfilePageSetPassword/>
                       </div>
                   </div>
            </div>
    )
}
export default MyProfilePage;