import React from "react";
import './Gistogramma.css';
import "hammerjs";
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem
} from "@progress/kendo-react-charts";

const Gistogramma = () => {

    //
    // const dataField = [{
    //     product: "25.01"}];
    //
    // const seriesDataOne = [{
    //     product: "25.02",
    //     sales: 125
    //
    // }];
    //
    // const seriesDataTwo = [{
    //     product: "25.03",
    //     sales: 125
    //
    // }];
    // const seriesDataThree = [{
    //     product: "25.04",
    //     sales: 125
    //
    // }];

    const [firstColumn, secondColumn, threeColumn, fourColumn, fiveColumn, sixColumn] = [
        [24, 3, 36, 34],
        [12, 16, 36, 51],
        [2, 26, 3, 16],
        [26, 46, 33, 21],
        [5, 12, 16, 21],
        [5, 12, 16, 21]
    ];





    // const secondColumn =
    //     [11, 163, 16, 20, 26, 44
    //         // [11, 3, 36, 11, 4],
    //         // [14, 36, 13, 44, 24],
    //         // [12, 36, 23, 15, 14]
    //     ];
    //
    // const threeColumn =
    //     [11, 36, 36, 21, 26, 14
    //         // [11, 3, 36, 11, 4],
    //         // [14, 36, 13, 44, 24],
    //         // [12, 36, 23, 15, 14]
    //     ];
    //
    // const fourColumn =
    //     [44, 36, 36, 21, 26, 23
    //         // [11, 3, 36, 11, 4],
    //         // [14, 36, 13, 44, 24],
    //         // [12, 36, 23, 15, 14]
    //     ];
    //

    const dataVote = [
        '25.01',
        '25.02',
        '25.03',
        '25.04'
    ];

    return (
       <div>
            {/*<Chart className={'gistogramma-size'}>*/}
            {/*    <ChartCategoryAxis>*/}
            {/*        <ChartCategoryAxisItem categories={dataVote} startAngle={45}>*/}
            {/*        </ChartCategoryAxisItem>*/}
            {/*    </ChartCategoryAxis>*/}
            {/*    <ChartSeries >*/}
            {/*        <ChartLegend position={'top'} orientation={'horizontal'} />*/}
            {/*        <ChartSeriesItem type="column" data={firstColumn} />*/}
            {/*        <ChartSeriesItem type="column" data={secondColumn} />*/}
            {/*        <ChartSeriesItem type="column" data={threeColumn} />*/}
            {/*        <ChartSeriesItem type="column" data={fourColumn} />*/}
            {/*        <ChartSeriesItem type="column" data={fiveColumn} />*/}
            {/*        <ChartSeriesItem type="column" data={sixColumn} />*/}
            {/*        <ChartLegend/>*/}
            {/*    </ChartSeries>*/}
            {/*</Chart>*/}
           <svg className={'gistogramma-size'}>
               <rect width="10" height="100" x="1" y="6" rx="22" ry="0" />
               <rect width="10" height="80" x="14" y="6" rx="22" ry="0" />
               <rect width="10" height="55" x="27" y="6" rx="0" ry="0" />
               <rect width="10" height="100" x="40" y="6" rx="0" ry="0" />

           </svg>
           <div className={'gistogramma-size__date'}>
               <span>25.01</span>
               <span>25.01</span>
               <span>25.01</span>
               <span>25.01</span>
           </div>
        </div>
    )
}

export default Gistogramma;