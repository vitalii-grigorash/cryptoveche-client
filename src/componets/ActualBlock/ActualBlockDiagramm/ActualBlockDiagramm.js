import React from "react";
import './ActualBlockDiagramm.css';
import row_icon_button from '../../../img/ActualBlockDiagramm_row.svg';


const ActualBlockDiagramm = () => {

     let sectorCircle = 0.55;

    function drawCircles(radius, k , colorsCircle) {

        let circleFull = 2 * Math.PI * radius;
        let gapBetweenCircle = sectorCircle === 1 ? 0 : 1;
        let circleFill = circleFull * k;
        let circleEmpty = circleFull - circleFill;
        let cOffset = circleFull / 4;


        return (
            <svg className={'diagramm-circle'} viewBox={'0 0 50 50'}>
                <circle className={'circle__style'} r={radius} cx={'50%'} cy={'50%'} stroke={colorsCircle[0]} strokeDasharray={(circleFill - gapBetweenCircle) + ' ' + circleEmpty} strokeDashoffset={cOffset}/>
                <circle className={'circle__style'} r={radius} cx={'50%'} cy={'50%'} stroke={colorsCircle[1]} strokeDasharray={(circleEmpty - gapBetweenCircle) + ' ' + circleFill } strokeDashoffset={cOffset - circleFill + gapBetweenCircle/2}/>
            </svg>
    )
    }

    return (
            <div className={'diagramm-container'}>
                <a href={'main'}><img className={'diagramm-container__row-button-left'} src={row_icon_button} alt={'кнопка стрелка'}/></a>
                <a href={'main'}><img className={'diagramm-container__row-button-right'} src={row_icon_button} alt={'кнопка стрелка'}/></a>
                <span className={'diagramm-container__info'}>
                    <h3>{  (sectorCircle*100).toFixed(0) }%</h3>
                    <p>времени прошло</p>
                </span>
                        {drawCircles(18, sectorCircle, ['#4ED4A9','#F9C521'])}
            </div>
    )
}

export default ActualBlockDiagramm;