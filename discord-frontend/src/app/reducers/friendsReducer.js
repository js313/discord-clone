import { friendsAction } from "../actions/friendsAction";

const initState = {
  friends: [],
  friendRequests: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case friendsAction.SET_FRIENDS:
      return {
        ...state,
        friends: action.payload.friends,
      };
    case friendsAction.SET_FRIEND_REQUESTS:
      return {
        ...state,
        friendRequests: action.payload.friendRequests,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
