import React, {useEffect, useState} from "react";
import './ MyProfilePage.css';
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import MyProfilePagePersonalData from "../ MyProfilePagePersonalData/ MyProfilePagePersonalData";
import MyProfilePageAdditionalSettings from "../ MyProfilePageAdditionalSettings/ MyProfilePageAdditionalSettings";
import CalendarVotes from "../CalendarVotes/CalendarVotes";
import MyProfilePageSetPassword from "../ MyProfilePageSetPassword/ MyProfilePageSetPassword";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";



const MyProfilePage = (props) => {

    const {
        requestHelper,
        utcOffset
    } = props;


    const currentUser = React.useContext(CurrentUserContext);
    const userId = currentUser.id
    const userEmail = currentUser.email


    return (
        <div className={'my-profile-page__wrapper'}>
            <TitleVotesDetailsCallVotingProfile firstLetter={'Главная'} secondLetter={'Мой профиль'} titleName={'Мой профиль'} hiddenRowBack={true}/>
            <div className={'my-profile-page__main-content'}>
                <div className={'main-content__grid-item_1'}>
                    <MyProfilePagePersonalData
                        requestHelper={requestHelper}
                        userId={userId}
                        userEmail={userEmail}/>
                </div>
                <div className={'main-content__grid-item_2'}>
                    <MyProfilePageAdditionalSettings
                        requestHelper={requestHelper}
                        userId={userId}
                        utc={utcOffset}
                    />
                </div>
                <div className={'main-content__grid-item_3'}>
                    <CalendarVotes requestHelper={requestHelper} />
                </div>
                <div className={'main-content__grid-item_4'}>
                    <MyProfilePageSetPassword
                        requestHelper={requestHelper}
                        userId={userId}/>
                </div>
            </div>
            <button className={'my-profile-page__exit-button-profile'}>Выйти из профиля</button>
        </div>
    )
}
export default MyProfilePage;