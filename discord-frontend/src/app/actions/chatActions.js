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

export const setMesssages = (messages) => {
  return {
    type: chatActions.SET_MESSAGES,
    payload: messages,
  };
};
