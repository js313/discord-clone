import { chatActions } from "../actions/chatActions";

const initState = {
  messages: [],
  chatDetails: null,
  chatType: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case chatActions.SET_CHAT_DETAILS:
      return {
        ...state,
        chatDetails: action.payload.details,
        chatType: action.payload.type,
      };
    case chatActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
