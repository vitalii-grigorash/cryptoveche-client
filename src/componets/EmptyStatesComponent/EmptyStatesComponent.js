import React from "react";
import './EmptyStatesComponent.css';
import empty_states_img from '../../img/EmptyStatesImg.svg';
import logo_icon from "../../img/ActualBlock_logo.svg";

const EmptyStatesComponent = () => {

    return (
        <div className={'empty-states-component_wrapper'}>
            <div className={'empty-states-component__title'}>
                <img alt={'иконка для заголовка'} src={logo_icon} /><h2>Актуальное</h2>
            </div>
            <img className={'empty-states-component_img _ing'} src={empty_states_img} alt={'картинка'}/>
            <span>У вас пока нет голосований. Здесь будут отображаться актуальные голосования.</span>
        </div>
    )
}
export default EmptyStatesComponent;