import React from 'react';
import './ShowMessage.css';


    // Wishes based on time
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
    NightOne: {
        textAlert: "It's Night Now",
        wish: "Did you have dinner??"
    },
    Midnight: {
        textAlert: "It's Midnight Now",
        wish: "Let's start a new Day!"
    },
    NightTwo: {
        textAlert: "It's prety late Now",
        wish: "You should sleep Now"
    }

}

    // Getting Moments based on time
const timeDetect = (hour, min) => {

    if (hour === 0 && min === 0) {
        return 'Midnight';
    }
    if(hour < 5.00) {
        return 'NightTwo';
    }
    if(hour > 5.00 && hour < 12.00) {
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
        return 'NightOne';
    };
} 


const ShowMessage = props => {
        // passing current time to condition
    const hour = timeDetect(props.hour, props.min );
    const {textAlert, wish} = Texts[hour];

    return (
        <div className='text-container'>
            <div className='text-alert'>{textAlert}</div>
            <div className='wish'>{wish}</div>
        </div>

    )
}

export default ShowMessage;