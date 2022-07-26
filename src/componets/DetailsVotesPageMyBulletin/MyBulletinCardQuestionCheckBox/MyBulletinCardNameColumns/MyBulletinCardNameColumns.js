import React from "react";
import './MyBulletinCardNameColumns.css';

const MyBulletinCardNameColumns = ({nameColumnBulletin}) => {

    return (
        <>
            <th className={'call-voting-name-columns__wrapper'}>{nameColumnBulletin}</th>
        </>
    )
}
export default MyBulletinCardNameColumns;