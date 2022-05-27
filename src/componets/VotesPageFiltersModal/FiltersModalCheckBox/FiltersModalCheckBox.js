import React from "react";
import './FiltersModalCheckBox.css';

const FiltersModalCheckBox = ({nameSearchVote}) => {


    return (
            <div className={'checkbox-status-vote'}>
                <label className={'checkbox-status-vote_container'}>
                    <input type="checkbox" value="yes"/>
                    <span className={'checkbox-status-vote_checkmark'}/>
                </label>
                <span>{nameSearchVote}</span>
            </div>
    )
}
export default FiltersModalCheckBox;
