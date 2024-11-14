import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Mic = ({ isAnimating, isListening, isLoading, handleMicClick }) => {
  return (
    <>
      <div className="mic-sec">
        <div className="mic-div">
          <button
            type="button"
            className={`mic ${isAnimating ? "animating" : ""} ${isListening ? "listening" : ""} ${isLoading ? "loading" : ""}`}
            style={{ width: "auto", height: "auto" }}
            onClick={handleMicClick}
          >
            <FontAwesomeIcon
              icon={faMicrophone}
              style={{ color: "#65bada" }}
            />
            {/* Display canvas only when mic is listening */}
            <canvas className={`visualizer ${isListening ? 'show' : ''}`} style={{ display: isListening ? 'block' : 'none' }}></canvas>
          </button>

          {/* Show loading text when mic is loading */}
          <div className="mic_text">
            {isLoading ? "Loading..." : "Give it a try!"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mic;
