import React from "react";
import './AmountVotesBlock.css';
import Gistogramma from "./Gistogramma/Gistogramma";



const AmountVotesBlock = () => {



    return (

        <div className={'amount-votes-wrapper'}>
            <h3>Количество голосующих</h3>
            <h4>Динамика голосующих по дням</h4>
            <div className={'amount-votes__gistogramma-and-total-amount'}>
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