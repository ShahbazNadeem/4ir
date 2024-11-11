import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
const Mic = ({isAnimating,isListening,handleMicClick}) => {
  return (
    <>
     <div className="mic-sec">
                <div className="mic-div">
                  <button
                    type="button"
                    className={`mic ${isAnimating ? "animating" : ""} ${
                      isListening ? "listening" : ""
                    }`}
                    style={{width: "300px", height: "300px"}}
                    onClick={handleMicClick}
                  >
                    <FontAwesomeIcon
                      icon={faMicrophone}
                      style={{ color: "#65bada" }}
                    />
                    <canvas className="visualizer"></canvas>
                  </button>
                  <div className="mic_text">Give it a try!</div>
                </div>
              </div>
    </>
  )
}

export default Mic