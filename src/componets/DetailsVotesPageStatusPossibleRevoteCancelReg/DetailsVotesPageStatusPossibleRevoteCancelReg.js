import React from "react";
import './DetailsVotesPageStatusPossibleRevoteCancelReg.css';

const DetailsVotesPageStatusPossibleRevoteCancelReg = (props) => {

    const {
        voteData
    } = props;

    return (
        <div className='details-votes-page-status-possible-revote-cancelreg__wrapper'>
            <div className='details-votes-page-status-possible-revote-cancelreg__possible-revote'>
                Возможность переголосовать:<span>{voteData.re_voting ? 'есть' : 'нет'}</span>
            </div>
            <div className='details-votes-page-status-possible-revote-cancelreg__possible-revote'>
                Возможность отмены регистрации:<span>{voteData.re_registration ? 'есть' : 'нет'}</span>
            </div>
        </div>
    )
}

export default DetailsVotesPageStatusPossibleRevoteCancelReg;
