import React, { useEffect, useState } from "react";
import './Gistogramma.css';


const Gistogramma = ({ statsVoted }) => {

  const [sortedArray, setSortedArray] = useState([]);

  useEffect(() => {
    if (statsVoted && statsVoted.length > 0) {
      setSortedArray(statsVoted.slice(statsVoted.length - 8, statsVoted.length).sort((a, b) => a.day > b.day ? 1 : -1))
    }
  }, [statsVoted])

  console.log('sortedArray', sortedArray);
  console.log('statsVoted', statsVoted);

  const firstDateColumn = [46, 53, 56, 100, 34];
  // const secondDateColumn = [50, 100, 56, 100, 44];
  // const threeDateColumn = [40, 77, 86, 35, 100];
  // const fourDateColumn = [40, 63, 23, 60, 48];

  return (
    <>
      {sortedArray && sortedArray.length > 0 &&
        <div className={'gistogramma-block'}>
          <svg className={'gistogramma-block__stylization'} >
            {/* <rect width="10" height={fourDateColumn[5]} fill={'#0084FE'} x="0" y="6" rx="0" ry="0" />
            <rect width="10" height={fourDateColumn[4]} fill={'#87CEFA'} x="280" y="6" rx="0" ry="0" />
            <rect width="10" height={fourDateColumn[3]} fill={'#87CEFA'} x="28" y="6" rx="0" ry="0" />
            <rect width="10" height={fourDateColumn[2]} fill={'#87CEFA'} x="42" y="6" rx="0" ry="0" />
            <rect width="10" height={fourDateColumn[1]} fill={'#0084FE'} x="56" y="6" rx="0" ry="0" />
            <rect width="10" height={fourDateColumn[0]} fill={'#87CEFA'} x="70" y="6" rx="0" ry="0" />
            <rect width="10" height={threeDateColumn[4]} fill={'#87CEFA'} x="84" y="6" rx="0" ry="0" />
            <rect width="10" height={threeDateColumn[3]} fill={'#87CEFA'} x="98" y="6" rx="0" ry="0" />
            <rect width="10" height={threeDateColumn[2]} fill={'#0084FE'} x="112" y="6" rx="0" ry="0" />
            <rect width="10" height={threeDateColumn[1]} fill={'#87CEFA'} x="126" y="6" rx="0" ry="0" />
            <rect width="10" height={threeDateColumn[0]} fill={'#87CEFA'} x="140" y="6" rx="0" ry="0" />
            <rect width="10" height={secondDateColumn[4]} fill={'#87CEFA'} x="154" y="6" rx="0" ry="0" />
            <rect width="10" height={secondDateColumn[3]} fill={'#0084FE'} x="168" y="6" rx="0" ry="0" />
            <rect width="10" height={secondDateColumn[2]} fill={'#87CEFA'} x="182" y="6" rx="0" ry="0" />
            <rect width="10" height={secondDateColumn[1]} fill={'#87CEFA'} x="196" y="6" rx="0" ry="0" />
            <rect width="10" height={secondDateColumn[0]} fill={'#87CEFA'} x="210" y="6" rx="0" ry="0" /> */}
            <rect width="10" height={firstDateColumn[4]} fill={'#0084FE'} x="224" y="6" rx="0" ry="0" />
            <rect width="10" height={firstDateColumn[3]} fill={'#87CEFA'} x="238" y="6" rx="0" ry="0" />
            <rect width="10" height={firstDateColumn[2]} fill={'#87CEFA'} x="252" y="6" rx="0" ry="0" />
            <rect width="10" height={firstDateColumn[1]} fill={'#87CEFA'} x="266" y="6" rx="0" ry="0" />
            <rect width="10" height={firstDateColumn[0]} fill={'#0084FE'} x="280" y="6" rx="0" ry="0" />
          </svg>
          <div className={'gistogramma-block__date'}>
            <span>{sortedArray[0].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[2].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[4].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[6].day.slice(5, 10).split('-').reverse().join('.')}</span>
            {/* <span>{sortedArray[8].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[10].day.slice(5, 10).split('-').reverse().join('.')}</span> */}
          </div>
        </div>
      }
    </>
  )
}

export default Gistogramma;