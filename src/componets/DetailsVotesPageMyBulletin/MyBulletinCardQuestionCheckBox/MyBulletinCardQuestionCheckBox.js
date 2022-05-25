import React from "react";
import './MyBulletinCardQuestionCheckBox.css';
import CallVotingCheckBox from "../../CallVotingPageQuestionCardCheckBox/CallVotingCheckBox/CallVotingCheckBox";


const MyBulletinCardQuestionCheckBox = ({titleName, nameFirstColumn, nameSecondColumn, nameThirdColumn}) => {


    return (
            <div className={'my-bulletin-card-question-check__wrapper'}>
                <div className={'my-bulletin-card-question-check__title'}>
                    <h3>{titleName}</h3></div>
                <div className={'my-bulletin-card-question-check__select-checkboxes-block'}>
                    <div className={'my-bulletin-card-question-check__header-columns'}>
                        <span/>
                        <span>{nameFirstColumn}</span>
                        <span>{nameSecondColumn}</span>
                        <span>{nameThirdColumn}</span>
                    </div>
                    <CallVotingCheckBox checkBoxNameRow={'Только через КриптоВече'}/>
                    <CallVotingCheckBox checkBoxNameRow={'На общем собрании'}/>
                    <CallVotingCheckBox checkBoxNameRow={'Третий варентос'}/>
                    <CallVotingCheckBox checkBoxNameRow={'Очень совсем уж динный четвертый чтобы стыдно было такие варианты давать блин'}/>
                </div>
            </div>
    )
}
export default MyBulletinCardQuestionCheckBox;
