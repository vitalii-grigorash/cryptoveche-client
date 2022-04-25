import React from "react";
import './ActualBlockDiagramm.css';
import row_icon_button from '../../../img/ActualBlockDiagramm_row.svg';


const ActualBlockDiagramm = () => {

  
    function drawCircles(r, k , colors) {

        let cFull = 2 * Math.PI * r;
        let zazor = 0;
        let cFill = cFull*k - zazor;
        let cEmpty = cFull - cFill;
        let cOffset = cFull/4;


        return (
            <svg className={'diagramm-circle'} viewBox={'0 0 50 50'}>
                <circle className={'circle__one'} r={r} cx={'50%'} cy={'50%'} stroke={colors[0]} strokeDasharray={cFill + ' ' + cEmpty} stroke-dashoffset={cOffset}/>
                <circle className={'circle__one'} r={r} cx={'50%'} cy={'50%'} stroke={colors[1]} strokeDasharray={cFill + ' ' + cEmpty} stroke-dashoffset={cOffset + cFill}/>
            </svg>
    )
    }

    return (
            <div className={'diagramm-container'}>
                <a href={'link'}><img className={'diagramm-container__row-button-left'} src={row_icon_button} alt={'кнопка стрелка'}/></a>
                <a href={'link'}><img className={'diagramm-container__row-button-right'} src={row_icon_button} alt={'кнопка стрелка'}/></a>
                <span className={'diagramm-container__info'}>
                    <h3>55%</h3>
                    <p>времени прошло</p>
                </span>

                        {drawCircles(18,0.55, ['#4ED4A9','#F9C521'])}

            </div>
    )
}

export default ActualBlockDiagramm;