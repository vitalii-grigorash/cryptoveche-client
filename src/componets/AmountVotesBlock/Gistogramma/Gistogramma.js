import React, { useEffect, useState } from "react";
import './Gistogramma.css';


const Gistogramma = ({ statsVoted }) => {

  const [sortedArray, setSortedArray] = useState([])

  useEffect(() => {
    if (statsVoted && statsVoted.length > 0) {
      setSortedArray(statsVoted.sort((a, b) => a.day > b.day ? 1 : -1))
    }
  }, [statsVoted])

  return (
    <>
      {sortedArray && sortedArray.length > 0 &&
        <div className={'gistogramma-block'}>
          <svg className={'gistogramma-block__stylization'} >
						<rect width="10" height={1 + sortedArray[19].voted * 10} fill={'#87CEFA'} x="12" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[18].voted * 10} fill={'#87CEFA'} x="28" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[17].voted * 10} fill={'#87CEFA'} x="42" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[16].voted * 10} fill={'#0084FE'} x="56" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[15].voted * 10} fill={'#87CEFA'} x="70" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[14].voted * 10} fill={'#87CEFA'} x="84" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[13].voted * 10} fill={'#87CEFA'} x="98" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[12].voted * 10} fill={'#0084FE'} x="112" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[11].voted * 10} fill={'#87CEFA'} x="126" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[10].voted * 10} fill={'#87CEFA'} x="140" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[9].voted * 10} fill={'#87CEFA'} x="154" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[8].voted * 10} fill={'#0084FE'} x="168" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[7].voted * 10} fill={'#87CEFA'} x="182" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[6].voted * 10} fill={'#87CEFA'} x="196" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[5].voted * 10} fill={'#87CEFA'} x="210" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[4].voted * 10} fill={'#0084FE'} x="224" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[3].voted * 10} fill={'#87CEFA'} x="238" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[2].voted * 10} fill={'#87CEFA'} x="252" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[1].voted * 10} fill={'#87CEFA'} x="266" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + sortedArray[0].voted * 10} fill={'#0084FE'} x="280" y="6" rx="0" ry="0" />
          </svg>
          <div className={'gistogramma-block__date'}>
            <span>{sortedArray[0].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[2].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[4].day.slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{sortedArray[sortedArray.length - 2].day.slice(5, 10).split('-').reverse().join('.')}</span>
          </div>
        </div>
      }
    </>
  )
}
export default Gistogramma;
