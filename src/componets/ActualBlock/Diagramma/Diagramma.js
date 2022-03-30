import React from "react";
import './Diagramma.css';
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


const VoteDiagramm = () => {


    return (
        <div>
            <Chart donutCenterRender={donutCenterRenderer}>
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

export default VoteDiagramm;