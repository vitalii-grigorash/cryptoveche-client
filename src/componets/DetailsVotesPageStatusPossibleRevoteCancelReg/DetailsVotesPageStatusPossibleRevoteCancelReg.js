import React from "react";
import './DetailsVotesPageStatusPossibleRevoteCancelReg.css';

const DetailsVotesPageStatusPossibleRevoteCancelReg = () => {

    return (
            <div className={'details-votes-page-status-possible-revote-cancelreg__wrapper'}>
                <div className={'details-votes-page-status-possible-revote-cancelreg__possible-revote'}>
                    Возможность переголосовать:<span>есть</span>
                </div>
                <div className={'details-votes-page-status-possible-revote-cancelreg__possible-revote'}>
                    Возможность отмены регистрации:<span>есть</span>
                </div>
            </div>
    )
}

export default DetailsVotesPageStatusPossibleRevoteCancelReg;