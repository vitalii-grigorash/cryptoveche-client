import React, { useEffect, useState } from "react";
import './Gistogramma.css';


const Gistogramma = ({ statsVoted }) => {

  const [sortedArray, setSortedArray] = useState([]);

  useEffect(() => {
    if (statsVoted && statsVoted.length > 0) {
      setSortedArray(statsVoted.slice(statsVoted.length - 9, statsVoted.length).sort((a, b) => a.day > b.day ? 1 : -1))
    }
  }, [statsVoted])

	// const firstDateColumn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  // const secondDateColumn = [6, 7, 8, 9, 10];
  // const threeDateColumn = [11, 12, 13, 14, 15];
  // const fourDateColumn = [16, 17, 18, 19, 20];

  return (
    <>
      {sortedArray && sortedArray.length > 0 &&
        <div className={'gistogramma-block'}>
          <svg className={'gistogramma-block__stylization'} >
						{/* <rect width="10" height={sortedArray[19]} fill={'#87CEFA'} x="12" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[18]} fill={'#87CEFA'} x="28" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[17]} fill={'#87CEFA'} x="42" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[16]} fill={'#0084FE'} x="56" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[15]} fill={'#87CEFA'} x="70" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[14]} fill={'#87CEFA'} x="84" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[13]} fill={'#87CEFA'} x="98" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[12]} fill={'#0084FE'} x="112" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[11]} fill={'#87CEFA'} x="126" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[10]} fill={'#87CEFA'} x="140" y="6" rx="0" ry="0" /> */}
						{/* <rect width="10" height={sortedArray[9].voted} fill={'#87CEFA'} x="154" y="6" rx="0" ry="0" /> */}
						<rect width="10" height={sortedArray[8].voted} fill={'#0084FE'} x="168" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[7].voted} fill={'#87CEFA'} x="182" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[6].voted} fill={'#87CEFA'} x="196" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[5].voted} fill={'#87CEFA'} x="210" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[4].voted} fill={'#0084FE'} x="224" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[3].voted} fill={'#87CEFA'} x="238" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[2].voted} fill={'#87CEFA'} x="252" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[1].voted} fill={'#87CEFA'} x="266" y="6" rx="0" ry="0" />
						<rect width="10" height={sortedArray[0].voted} fill={'#0084FE'} x="280" y="6" rx="0" ry="0" />
          </svg>
          <div className={'gistogramma-block__date'}>
            <span>{sortedArray[0].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[2].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[4].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[6].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[8].day.slice(5, 10).split('-').reverse().join('.')}</span>
            {/* <span>{sortedArray[10].day.slice(5, 10).split('-').reverse().join('.')}</span> */}
          </div>
        </div>
      }
    </>
  )
}

export default Gistogramma;
