import React from "react";
import './Gistogramma.css';


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
       <div className={'gistogramma-block'}>

           <svg className={'gistogramma-block__stylization'}>
               <rect width="10" height="100" fill={'#0084FE'}  x="0" y="6" rx="0" ry="0" />
               <rect width="10" height="55" fill={'#87CEFA'} x="14" y="6" rx="0" ry="0" />
               <rect width="10" height="100" fill={'#87CEFA'} x="28" y="6" rx="0" ry="0" />
               <rect width="10" height="50" fill={'#87CEFA'} x="42" y="6" rx="0" ry="0" />
               <rect width="10" height="50" fill={'#0084FE'} x="56" y="6" rx="0" ry="0" />
               <rect width="10" height="100" fill={'#87CEFA'} x="70" y="6" rx="0" ry="0" />
               <rect width="10" height="80" fill={'#87CEFA'} x="84" y="6" rx="0" ry="0" />
               <rect width="10" height="50" fill={'#87CEFA'} x="98" y="6" rx="0" ry="0" />
               <rect width="10" height="68" fill={'#0084FE'} x="112" y="6" rx="0" ry="0" />
               <rect width="10" height="48" fill={'#87CEFA'} x="126" y="6" rx="0" ry="0" />
               <rect width="10" height="78" fill={'#87CEFA'} x="140" y="6" rx="0" ry="0" />
               <rect width="10" height="48" fill={'#87CEFA'} x="154" y="6" rx="0" ry="0" />
               <rect width="10" height="41" fill={'#0084FE'} x="168" y="6" rx="0" ry="0" />
               <rect width="10" height="31" fill={'#87CEFA'} x="182" y="6" rx="0" ry="0" />
               <rect width="10" height="49" fill={'#87CEFA'} x="196" y="6" rx="0" ry="0" />
               <rect width="10" height="89" fill={'#87CEFA'} x="210" y="6" rx="0" ry="0" />
               <rect width="10" height="91" fill={'#0084FE'} x="224" y="6" rx="0" ry="0" />
               <rect width="10" height="79" fill={'#87CEFA'} x="238" y="6" rx="0" ry="0" />
               <rect width="10" height="49" fill={'#87CEFA'} x="252" y="6" rx="0" ry="0" />
               <rect width="10" height="69" fill={'#87CEFA'} x="266" y="6" rx="0" ry="0" />
               <rect width="10" height="59" fill={'#0084FE'}  x="280" y="6" rx="0" ry="0" />
           </svg>
           <div className={'gistogramma-block__date'}>
               <span>25.01</span>
               <span>25.02</span>
               <span>25.03</span>
               <span>25.04</span>
           </div>
        </div>
    )
}

export default Gistogramma;