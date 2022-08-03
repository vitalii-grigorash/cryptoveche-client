import React, { useEffect, useState } from "react";
import './AmountVotesBlock.css';
import Gistogramma from "./Gistogramma/Gistogramma";
import gistogramma_procent_row_icon from "../../img/AmountVotesGistogramma_procent_icon.svg";



const AmountVotesBlock = ({ statsData }) => {

    const [averageValueVoiting, setAverageValueVoiting] = useState(0);

    useEffect(() => {

        if (statsData && Object.keys(statsData).length > 0) {

            let sumVoiting = 0;

            for (let obj of statsData.voted) {
                sumVoiting += obj.voted;
            }

            setAverageValueVoiting(sumVoiting / statsData.voted.length)
        }
    }, [statsData])

    return (

        <div className={'amount-votes-wrapper main-content__elem3'}>
            <h3>Количество голосующих</h3>
            <h4>Динамика голосующих по дням</h4>
            <div className={'amount-votes__gistogramma-and-total-amount'}>
                <img className={'gistogramma-and-total-amount__row'} alt={'стрелочка повышения процента'} src={gistogramma_procent_row_icon} />
                <span className={'gistogramma-and-total-amount__procent'}>10%</span>
                {statsData.voted && statsData.voted.length > 0 && <Gistogramma statsVoted={statsData.voted} />}
                <div className={'total-amount'}>
                    <h1>{averageValueVoiting.toFixed(1)}</h1>
                    <span>человек голосует ежедневно</span>
                </div>
            </div>
        </div>
    );
}

export default AmountVotesBlock;