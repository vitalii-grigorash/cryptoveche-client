import React from "react";
import './PreLoaderCallVotingPage.css';

const PreLoaderCallVotingPage = () => {


    return (
        <div className={'preloader-container'}>
            <div className={'preloader-call-voting'}>
                Загрузка...
                <span className={'preloader-ring'}></span>
            </div>
        </div>
    )
}
export default PreLoaderCallVotingPage;