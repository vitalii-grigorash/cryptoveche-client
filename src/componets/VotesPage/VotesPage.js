import React, { useEffect, useState } from "react";
import './VotesPage.css';
import VotesPageActiveVotes from "../VotesPageActiveVotes/VotesPageActiveVotes";
import { activeVotesData } from "../../activeVotesData";
import VotesPagePaginationTableSearch from "../VotesPagePaginationTableSearch/VotesPagePaginationTableSearch";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import qr_cod_icon from '../../img/TitleVotesDetailsQRcod.svg';
import VotesPageArchiveVotes from "../VotesPageArchiveVotes/VotesPageArchiveVotes";
import VotesPageFilterSortButtons from "../VotesPageFilterSortButtons/VotesPageFilterSortButtons";
import * as Events from '../../Api/Events';

const VotesPage = () => {

    const [btnActiveVotes, setBtnActiveVotes] = useState(true);
    const [btnArchiveVotes, setBtnArchiveVotes] = useState(false);

    function toggleActiveHide() {
        setBtnActiveVotes(true)
        setBtnArchiveVotes(false)
    }
    function toggleArchiveShow() {
        setBtnActiveVotes(false)
        setBtnArchiveVotes(true)
    }

    useEffect(() => {
        if (localStorage.getItem('jwt')) {
            const jwt = localStorage.getItem('jwt');
            const jwtTokens = JSON.parse(jwt);
            Events.getEvents(jwtTokens.access_token)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [])

    return (
        <div className={'votes-page-block__wrapper'}>
            <TitleVotesDetailsCallVotingProfile
                firstLetter={'Главная'}
                secondLetter={'Голосования'}
                titleName={'Голосования'}
                mobileLetter={'Назад на главную'} />
            <img className={'votes-page-block__qr-cod'} alt={'qr-код'} src={qr_cod_icon} />
            <div className={'votes-page-block__navigation-menu'}>
                <VotesPageFilterSortButtons />
                <VotesPagePaginationTableSearch />
            </div>
            <div className={'votes-page-block__main-content'}>
                <div className={'votes-page-switch-buttons'}>
                    <div>
                        <h2 onClick={() => { toggleActiveHide() }} className={btnActiveVotes ? 'active-votes-page-switch-buttons__button' : 'votes-page-switch-buttons__button'}>Активные <span className={'_active-vote-bnt _mobile-active-vote-bnt'}>голосования</span></h2>
                    </div>
                    <div>
                        <h2 onClick={() => { toggleArchiveShow() }} className={btnArchiveVotes ? 'active-votes-page-switch-buttons__button' : 'votes-page-switch-buttons__button'}>Архивные <span className={'_active-vote-bnt _mobile-active-vote-bnt'}>голосования</span></h2>
                    </div>
                </div>
                {btnActiveVotes && (
                    <>
                        {activeVotesData.map((item) => (
                            <VotesPageActiveVotes
                                key={item.id}
                                id={item.id}
                                titleVoteData={item.titleVoteData}
                                regStatus={item.regStatus}
                                voteStatus={item.voteStatus}
                                dateTimeDate={item.DateReg}
                                dateTimeWatch={item.TimeReg}
                                dateTimeDate1={item.DateVote}
                                dateTimeWatch1={item.TimeVote}
                                confirmStatus={item.confirmStatus}
                                nameRegButton={item.nameRegButton} />
                        )
                        )}
                    </>
                )}
                {btnArchiveVotes && (
                    <>
                        <VotesPageArchiveVotes titleVoteData={'Выбор делегатов конференции в Ученый Совет СПбГУ и еще парочка слов чтобы совсем уже было длинно'}
                            regStatus={'Регистрация'}
                            voteStatus={'Тайное'}
                            dateTimeWatch={'12:00'}
                            dateTimeDate={'03.10.2022'}
                            dateTimeDate1={'03.10.2022'}
                            dateTimeWatch1={'15:00'} confirmStatus={'Регистрация завершина'} />
                    </>
                )}

                <div className={'votes-page-block__main-content-show-more-button'}>
                    <span>ПОКАЗАТЬ ЕЩЁ</span>
                </div>
            </div>
            <VotesPagePaginationTableSearch />
        </div>
    )
}
export default VotesPage;