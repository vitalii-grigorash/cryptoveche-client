import React from "react";
import './MyBulletinCardNameRows.css';

const MyBulletinCardNameRows = ({nameRowBulletin, myBulletinCheckProp}) => {

    return (
       <>
            <tr className={'call-voting-name-rows__wrapper'}>
                <td className={'call-voting-name-rows__name-row'}>
                    {nameRowBulletin}
                </td>
                {myBulletinCheckProp}
            </tr>
       </>
    )
}
export default MyBulletinCardNameRows;