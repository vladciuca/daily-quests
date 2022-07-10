import React, { useEffect, useState } from "react";
import {
  MessageContainer,
  NotificationContainer,
  Title,
  ProgressBar,
  ExitButton,
} from "./Notification.styles";

export const Notification = ({ title, message, type, id, dispatch }) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prevState) => {
        if (prevState < 100) {
          return prevState + 0.5;
        }
        clearInterval(id);
        return prevState;
      });
    }, 20);

    console.log(id);
    //??? The intervalID does not update!
    // USE REF!
    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      //remove it from state & DOM
      dispatch({
        type: "REMOVE_NOTIFICATION",
        id,
      });
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();
    console.log(intervalID);
  }, []);

  return (
    <NotificationContainer
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      exit={exit}
    >
      <MessageContainer>
        <Title>
          {title ? title : <div></div>}
          <ExitButton onClick={() => setExit(true)}>x</ExitButton>
        </Title>
        {message}
      </MessageContainer>
      <ProgressBar type={type} width={width} />
    </NotificationContainer>
  );
};
