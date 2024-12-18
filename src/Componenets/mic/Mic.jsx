import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

const Mic = ({ isLoading, handleMicClick, layout }) => {
  return (
    <>
      <div className="mic-sec">
        <div className="mic-div">
          <button
            type="button"
            className={`mic ${isLoading ? "loading" : ""}`}
            style={{ width: "50px", height: "50px" }}
            onClick={handleMicClick}
          >
            {isLoading ? (
              <div className="voice-animation">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`bar bar-${i + 1}`}></span>
                ))}
              </div>
            ) : (
              <FontAwesomeIcon
                icon={faMicrophone}
                style={{ color: "#65bada" }}
              />
            )}
          </button>
          {!layout && (
            <div className="mic_text">
              {isLoading ? "Listening..." : "Give it a try"}
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          .mic {
            border: none;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            position: relative;
          }

          .voice-animation {
            display: flex;
            gap: 4px;
            align-items: flex-end;
          }

          .bar {
            width: 4px;
            height: 100px;
            border-radius: 50px;
            background: #65bada;
            animation: bounce 1s infinite ease-in-out;
          }

          .bar-1 {
            animation-delay: 0s;
          }

          .bar-2 {
            animation-delay: 0.2s;
          }

          .bar-3 {
            animation-delay: 0.4s;
          }

          .bar-4 {
            animation-delay: 0.6s;
          }

          .bar-5 {
            animation-delay: 0.8s;
          }

          @keyframes bounce {
            0%, 100% {
              transform: scaleY(0.5);
            }
            50% {
              transform: scaleY(1);
            }
          }

          .mic_text {
            margin-top: 10px;
            font-size: 14px;
          }
        `}
      </style>
    </>
  );
};

export default Mic;
