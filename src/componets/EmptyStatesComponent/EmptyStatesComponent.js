import React from "react";
import './EmptyStatesComponent.css';
import empty_states_img from '../../img/EmptyStatesImg.svg';

const EmptyStatesComponent = () => {

    return (
        <div className={'empty-states-component_wrapper'}>
            <img className={'_ing'} src={empty_states_img} alt={'картинка'}/>
            <span>У вас пока нет голосований. Здесь будут отображаться актуальные голосования.</span>
        </div>
    )
}
export default EmptyStatesComponent;