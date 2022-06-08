import React, {useEffect, useRef} from "react";
import './VotesAndDetailsPageSwitchButtons.css';
import GeneraInfoBtn from "./GeneraInfoBtn/GeneraInfoBtn";
import ReadQuestionsBtn from "./ReadQuestionsBtn/ReadQuestionsBtn";
import ArchiveVoteBtn from "./ArchiveVoteBtn/ArchiveVoteBtn";
import ActiveVoteBtn from "./ActiveVoteBtn/ActiveVoteBtn";
import ResultBtn from "./ResultBtn/ResultBtn";
import MyBulletinBtn from "./ MyBulletinBtn/ MyBulletinBtn";

const VotesAndDetailsPageSwitchButtons = ({hiddenGeneralBtn, hiddenReadQuestion, hiddenActiveBtn, hiddenArchiveBtn, hiddenResultBtn, hiddenBulletinBtn}) => {


     const switchBtnRef = useRef()



    return (

            <div ref={switchBtnRef} className={'votes-and-details-page-switch-buttons__wrapper'}>
                <ActiveVoteBtn hidden={hiddenActiveBtn}/>
                <ArchiveVoteBtn hidden={hiddenArchiveBtn}/>
                <GeneraInfoBtn hidden={hiddenGeneralBtn}/>
                <ReadQuestionsBtn hidden={hiddenReadQuestion}/>
                <ResultBtn hidden={hiddenResultBtn}/>
                <MyBulletinBtn hidden={hiddenBulletinBtn}/>
            </div>

    )
}

export default VotesAndDetailsPageSwitchButtons;