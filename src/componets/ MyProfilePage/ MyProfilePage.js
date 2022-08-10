import React from "react";
import './ MyProfilePage.css';
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import MyProfilePagePersonalData from "../ MyProfilePagePersonalData/ MyProfilePagePersonalData";
import MyProfilePageAdditionalSettings from "../ MyProfilePageAdditionalSettings/ MyProfilePageAdditionalSettings";
import CalendarVotes from "../CalendarVotes/CalendarVotes";
import MyProfilePageSetPassword from "../ MyProfilePageSetPassword/ MyProfilePageSetPassword";

const MyProfilePage = (props) => {

    const {
        requestHelper
    } = props;

    return (
            <div className={'my-profile-page__wrapper'}>
                <TitleVotesDetailsCallVotingProfile firstLetter={'Главная'} secondLetter={'Мой профиль'} titleName={'Мой профиль'} hiddenRowBack={true}/>
                   <div className={'my-profile-page__main-content'}>
                       <div className={'main-content__grid-item_1'}>
                            <MyProfilePagePersonalData
                                requestHelper={requestHelper}/>
                       </div>
                       <div className={'main-content__grid-item_2'}>
                             <MyProfilePageAdditionalSettings/>
                       </div>
                       <div className={'main-content__grid-item_3'}>
                           <CalendarVotes/>
                       </div>
                       <div className={'main-content__grid-item_4'}>
                           <MyProfilePageSetPassword/>
                       </div>
                   </div>
                <button className={'my-profile-page__exit-button-profile'}>Выйти из профиля</button>
            </div>
    )
}
export default MyProfilePage;