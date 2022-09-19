import React from "react";

const VerticalGraphThinColumn = (props) => {

    const {
        result
    } = props;

    return (
          <>
                <svg className={'card-question-vertical-graph-thin-column__column-svg'}>
                    <rect width={'28'} height={result + 1} fill={'#0084FE'} opacity={0.8}/>
                </svg>
          </>
    )
}
export default VerticalGraphThinColumn;