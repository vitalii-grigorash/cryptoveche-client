import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarVotes.css';

const CalendarVotes = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className={'calendar-wrapper'}>
            <div>
                <Calendar onChange={onChange} value={value}/>
            </div>
        </div>
    );
}
export default CalendarVotes;