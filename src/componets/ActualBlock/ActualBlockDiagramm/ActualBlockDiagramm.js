import React from "react";
import './ActualBlockDiagramm.css';
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
} from "@progress/kendo-react-charts";
import "hammerjs";
import data from './data-circle.json';

const donutCenterRenderer = () => (
        <span>
      <h3 style={{fontSize: 35, color: "#4ED4A9"}}>55%<p style={{fontSize: 15, color: '#363B4D'}}>время прошло</p></h3>
  </span>
    );


const ActualBlockDiagramm = () => {


    return (
        <div>
            <Chart donutCenterRender={donutCenterRenderer} className={'diag'}>
                <ChartSeries>
                    <ChartSeriesItem
                       size={50}
                        type="donut"
                        data={data}
                        categoryField="kind"
                        field="share"
                        gap={10}
                        >
                        {/*<ChartSeriesLabels*/}
                        {/*    padding={3}*/}
                        {/*    color={'none'}*/}
                        {/*    background='none'*/}
                        {/*    content={''}/>*/}
                    </ChartSeriesItem>
                </ChartSeries>
                <ChartLegend visible={false}/>
            </Chart>
        </div>
    )
}

export default ActualBlockDiagramm;