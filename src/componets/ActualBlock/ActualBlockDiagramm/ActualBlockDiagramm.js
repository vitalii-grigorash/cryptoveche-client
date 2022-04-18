import React from "react";
import './ActualBlockDiagramm.css';
import row_icon_button from '../../../img/ActualBlockDiagramm_row.svg';


const ActualBlockDiagramm = () => {


    return (
            <div className={'diagramm-container'}>
                <a href={'link'}><img className={'diagramm-container__row-button-left'} src={row_icon_button} alt={'кнопка стрелка'}/></a>
                <a href={'link'}><img className={'diagramm-container__row-button-right'} src={row_icon_button} alt={'кнопка стрелка'}/></a>
                <span className={'diagramm-container__info'}>
                   <h3>55%</h3>
                    <p>времени прошло</p>
                </span>
                    <svg className={'diagramm-circle'} viewBox={'0 0 50 50'}>
                        <circle className={'circle__one'} r={18} cx={'50%'} cy={'50%'}/>
                        <circle className={'circle__two'} r={18} cx={'50%'} cy={'50%'}/>
                    </svg>
            </div>
    )
}

export default ActualBlockDiagramm;