import React, { useEffect, useState } from "react";
import './Gistogramma.css';


const Gistogramma = ({ statsVoted }) => {

  const [sortedArray, setSortedArray] = useState([]);
  const getDayArray = sortedArray.map(el => el.day);
  const setDayForGraph = Array.from(new Set(getDayArray.slice(-5)));
  const setVotedColumnForGraph = Array.from(new Set(sortedArray.slice(-20)));

  useEffect(() => {
    if (statsVoted && statsVoted.length > 20) {
      setSortedArray(statsVoted.sort((a, b) => a.day > b.day ? 1 : -1))
    }
  }, [statsVoted])

  return (
    <>
      {sortedArray && sortedArray.length > 0 &&
        <div className={'gistogramma-block'}>
          <svg className={'gistogramma-block__stylization'} >
						<rect width="10" height={1 + setVotedColumnForGraph[19].voted * 10} fill={'#87CEFA'} x="12" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[18].voted * 10} fill={'#87CEFA'} x="28" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[17].voted * 10} fill={'#87CEFA'} x="42" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[16].voted * 10} fill={'#0084FE'} x="56" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[15].voted * 10} fill={'#87CEFA'} x="70" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[14].voted * 10} fill={'#87CEFA'} x="84" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[13].voted * 10} fill={'#87CEFA'} x="98" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[12].voted * 10} fill={'#0084FE'} x="112" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[11].voted * 10} fill={'#87CEFA'} x="126" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[10].voted * 10} fill={'#87CEFA'} x="140" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[9].voted * 10} fill={'#87CEFA'} x="154" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[8].voted * 10} fill={'#0084FE'} x="168" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[7].voted * 10} fill={'#87CEFA'} x="182" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[6].voted * 10} fill={'#87CEFA'} x="196" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[5].voted * 10} fill={'#87CEFA'} x="210" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[4].voted * 10} fill={'#0084FE'} x="224" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[3].voted * 10} fill={'#87CEFA'} x="238" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[2].voted * 10} fill={'#87CEFA'} x="252" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[1].voted * 10} fill={'#87CEFA'} x="266" y="6" rx="0" ry="0" />
						<rect width="10" height={1 + setVotedColumnForGraph[0].voted * 10} fill={'#0084FE'} x="280" y="6" rx="0" ry="0" />
          </svg>
          <div className={'gistogramma-block__date'}>
            <span>{setDayForGraph[0].slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{setDayForGraph[1].slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{setDayForGraph[2].slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{setDayForGraph[3].slice(5, 10).split('-').reverse().join('.')}</span>
            <span>{setDayForGraph[4].slice(5, 10).split('-').reverse().join('.')}</span>
          </div>
        </div>
      }
    </>
  )
}
export default Gistogramma;
