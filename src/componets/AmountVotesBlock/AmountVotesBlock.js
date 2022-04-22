import React from "react";
import './AmountVotesBlock.css';
import Gistogramma from "./Gistogramma/Gistogramma";
import gistogramma_procent_row_icon from "../../img/AmountVotesGistogramma_procent_icon.svg";



const AmountVotesBlock = () => {



    return (

            <div className={'amount-votes-wrapper main-content__elem3'}>
                <h3>Количество голосующих</h3>
                <h4>Динамика голосующих по дням</h4>
                <div className={'amount-votes__gistogramma-and-total-amount'}>
                    <span className={'gistogramma-and-total-amount__row-procent'}><img alt={'стрелочка повышения процента'} src={gistogramma_procent_row_icon}/>10%</span>
                    <Gistogramma/>
                    <div className={'total-amount'}>
                        <h1>1259</h1>
                        <span>человек голосует ежедневно</span>
                    </div>
                </div>
            </div>
    );
}

export default AmountVotesBlock;