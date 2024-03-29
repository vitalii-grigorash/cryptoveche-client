import React, { useEffect, useState } from "react";
import './ActualBlockDiagramm.css';
import row_icon_button from '../../../img/ActualBlockDiagramm_row.svg';


const ActualBlockDiagramm = (props) => {

  const {
    actualVote,
    switchActualEventForward,
    switchActualEventBack,
    arrowRightStyle,
    arrowLeftStyle
  } = props;

  const [nowTime, setNowTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [sectorCircle, setSectorCircle] = useState(0);

  useEffect(() => {
    if (actualVote && Object.keys(actualVote).length > 0) {
      setNowTime(Number(new Date().getTime()));
      setStartTime(Number(new Date(actualVote.event_start_time).getTime()));
      setEndTime(Number(new Date(actualVote.event_end_time).getTime()));
			setSectorCircle(Number
				(Number(nowTime - startTime) / Number(endTime - startTime)) >= 0
				?
				(Number(nowTime - startTime) / Number(endTime - startTime))
				:
				Number(0.001)
				);
    }
  }, [actualVote, startTime, endTime])

  function drawCircles(radius, sectorCircle, colorsCircle) {
    let circleFull = 2 * Math.PI * radius;
    let gapBetweenCircle = sectorCircle === 1 ? 0 : 1;
    let circleFill = circleFull * sectorCircle;
    let circleEmpty = circleFull - circleFill;
    let circleOffset = circleFull / 4;

    return (
      <>
        {sectorCircle && typeof (sectorCircle) === 'number' && (
          <svg className={'diagramm-circle'} viewBox={'0 0 50 50'}>
            <circle className={'circle__style'} r={radius} cx={'50%'} cy={'50%'} stroke={colorsCircle[0]} strokeDasharray={(circleFill - gapBetweenCircle) + ' ' + circleEmpty} strokeDashoffset={circleOffset} />
            <circle className={'circle__style'} r={radius} cx={'50%'} cy={'50%'} stroke={colorsCircle[1]} strokeDasharray={(circleEmpty - gapBetweenCircle) + ' ' + circleFill} strokeDashoffset={circleOffset - circleFill + gapBetweenCircle / 2} />
          </svg>
        )}
      </>
    )
  }

  return (
    <>
      {sectorCircle && typeof (sectorCircle) === 'number' && (
        <div className={'diagramm-container'}>
          <a href={'main'}>
            <img className={arrowLeftStyle} src={row_icon_button} alt={'кнопка стрелка'} onClick={switchActualEventBack} />
          </a>
          <a href={'main'} >
            <img className={arrowRightStyle} src={row_icon_button} alt={'кнопка стрелка'} onClick={switchActualEventForward} />
          </a>
          <span className={'diagramm-container__info'}>
						<h3>{(sectorCircle * 100).toFixed(0)}%</h3>
            <p>времени прошло</p>
          </span>
          {drawCircles(18, sectorCircle, ['#4ED4A9', '#F9C521'])}
        </div>
      )}
    </>
  )
}

export default ActualBlockDiagramm;
