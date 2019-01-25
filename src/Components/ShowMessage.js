import React from 'react';
import './ShowMessage.css';


const Texts = {
    Morning : {
        timeAlert: "It's Morning Now",
        wish: "Wish you have a nice day. :)"
    },
    Noon: {
        textAlert: "It's Noon Now",
        wish: "Half of the day is passed!!"
    },
    Afternoon: {
        textAlert: "It's Afternoon Now",
        wish: "Did you have lunch??"
    },
    Evening: {
        textAlert: "It's Evening Now",
        wish: "How was your day??"
    },
    Night: {
        textAlert: "It's Night Now",
        wish: "Did you have dinner??"
    },

}


const timeDetect = hour => {
    if(hour < 12.00) {
        return 'Morning';
    };
    if(hour === 12.00) {
        return 'Noon';
    };
    if( hour > 12.00 && hour < 17.00) {
        return 'Afternoon';
    };
    if(hour >= 17.00 && hour < 19.00) {
        return 'Evening';
    };
    if (hour >= 19.00 && hour < 24.00) {
        return 'Night';
    };
    if(hour === 0) {
        return 'Midnight';
    }
} 


const ShowMessage = props => {

    const timeText = timeDetect( props.hour )
    const {textAlert, wish} = Texts[timeText];

    return (
        <div className='text-container'>
            <div className='text-alert'>{textAlert}</div>
            <div className='wish'>{wish}</div>
        </div>

    )
}

export default ShowMessage;