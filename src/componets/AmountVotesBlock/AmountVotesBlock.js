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
                {/*<svg width="100" height="65">*/}
                {/*    <rect x="5" y="25" width="10" height="65"*/}
                {/*          fill="skyblue"strokeWidth="15"/>*/}
                {/*</svg>*/}
                {/*<svg width="100" height="65">*/}
                {/*    <rect x="5" y="25" width="10" height="65"*/}
                {/*          fill="skyblue"strokeWidth="15"/>*/}
                {/*</svg>*/}
                <div className={'total-amount'}>
                    <h1>1259</h1>
                    <span>человек голосует ежедневно</span>
                </div>
            </div>
        </div>
    );
}

export default AmountVotesBlock;