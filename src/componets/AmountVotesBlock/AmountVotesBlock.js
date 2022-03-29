import React from "react";
import './AmountVotesBlock.css';
import 'hammerjs';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from "@progress/kendo-react-charts";
import "hammerjs";


const AmountVotesBlock = () => {

    const [firstColumn, secondColumn, threeColumn, fourColumn] = [
        [1, 2, 3, 1, 6],
        [1, 2, 3, 5, 4],
        [1, 2, 3, 5, 4],
        [3, 2, 3, 5, 4]
        ];

    const dataVote = ['25.01', '25.02', '25.03', '25.04'];


    return (
        <div className={'amount-votes-wrapper'}>
            <h3>Количество голосующих</h3>
            <h4>Динамика голосующих по дням</h4>
            <div className={''}>
                <Chart className={'gistogramma'}>
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem type={'text'} categories={dataVote}>
                        </ChartCategoryAxisItem>
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartLegend position={'top'} orientation={'horizontal'} />
                        <ChartSeriesItem type="bar" data={firstColumn} />
                        <ChartSeriesItem type="bar" data={secondColumn} />
                        <ChartSeriesItem type="bar" data={threeColumn} />
                        <ChartSeriesItem type="bar" data={fourColumn} />
                        <ChartLegend/>
                    </ChartSeries>
                </Chart>
                <div className={'am'}>
                    <h1>1259</h1>
                    <span>человек голосует ежедневно</span>
                </div>
            </div>
        </div>
    );
}

export default AmountVotesBlock;