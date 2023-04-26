export const chatTypes = {
  DIRECT: "DIRECT",
  GROUP: "GROUP",
};

export const chatActions = {
  SET_CHAT_DETAILS: "CHAT.SET_CHAT_DETAILS",
  SET_CHAT_TYPE: "CHAT.SET_CHAT_TYPE",
  SET_MESSAGES: "CHAT.SET_MESSAGES",
};

export const getActions = (dispatch) => {
  return {
    setChatDetails: (details, type) => {
      dispatch(setChatDetails(details, type));
    },
    setMessages: (messages) => {
      dispatch(setMessages(messages));
    },
  };
};

export const setChatDetails = (details, type) => {
  return {
    type: chatActions.SET_CHAT_DETAILS,
    payload: {
      details,
      type,
    },
  };
};

export const setMessages = (messages) => {
  return {
    type: chatActions.SET_MESSAGES,
    payload: messages,
  };
};
