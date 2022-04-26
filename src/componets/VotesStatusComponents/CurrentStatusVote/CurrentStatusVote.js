import React from "react";
import './CurrentStatusVote.css';

const CurrentStatusVote = ({regStatus, voteStatus}) => {


    return (

            <div className={'status-block__current-status'}>
                <div className={'current-status__registration-in-progress'}>
                    <ul><li>{regStatus}</li></ul>
                </div>
                <div className={'current-status__secret'}>
                    <ul><li>{voteStatus}</li></ul></div>
            </div>

    )

}

export default CurrentStatusVote;