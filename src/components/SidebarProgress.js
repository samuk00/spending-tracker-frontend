import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const SidebarProgress = ({ progress }) => {

    return (
        <div className="progressbar">
            <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 1,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    strokeWidth: 15,

                    // Text size
                    textSize: '10px',

                    // How long animation takes to go from one progress to another, in seconds
                    pathTransitionDuration: 2.0,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(255, 105, 255, ${progress})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
            />
        </div>
    )
}

export default SidebarProgress
