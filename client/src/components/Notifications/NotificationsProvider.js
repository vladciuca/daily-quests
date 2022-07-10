import React, { createContext, useContext, useReducer } from "react";
import { v4 } from "uuid";
import { Notification } from "./Notification";
import { NotificationWrapper } from "./Notification.styles";

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((note) => note.id !== action.id);
      default:
        return state;
    }
  }, []);

  return (
    <NotificationContext.Provider value={dispatch}>
      <NotificationWrapper>
        {state.map((note) => {
          return <Notification dispatch={dispatch} key={note.id} {...note} />;
        })}
      </NotificationWrapper>
      {/* props.children are the dispatch objects that are are received by the Notification Provider */}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const dispatch = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        ...props,
      },
    });
  };
};

export default NotificationProvider;
